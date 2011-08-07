class Rocket
  
  attr_accessor :redis, :redis_message_queue_connection, :server_id, :mongo
  
  def show_error(ex)
    puts "ERROR: #{$!}"
    puts "#{ex.message}\n#{ex.class}"
    puts "#{ex.backtrace.join "\n"}"
  end
  
  def process_message_queue
    begin
      @redis_message_queue_connection.blpop("message_queue_#{@server_id}", 0) do |message|
        message = JSON.parse(message[1])
        user_id = message.delete "rocket_user_id"
        RocketUser.find(user_id) do |user|
          if user && user.web_socket
            transmit(user, message)
            process_message_queue
          else
            message.merge! :rocket_user_id => user_id
            ROCKET.redis.rpush("message_queue_#{ROCKET.server_id}", message.to_json) do
              process_message_queue
            end
          end
        end
      end
    rescue => ex
      show_error ex
    end
  end
  
  def transmit(user, message)
    if user
      user.web_socket.send message.to_json
    end
  end
  
  def process_command(user, controller, command, args)
    @@controllers[controller].new.process_command(user, command, args)
  end
  
  class RocketHttpServer < EM::Connection
    include EM::HttpServer
    
    require File.join(APP_ROOT, "lib", "lib", "mime_types.rb")
    
    def post_init
      super
      no_environment_strings
    end

    def process_http_request
      res = EM::DelegatedHttpResponse.new(self)
      path = @http_path_info.gsub(/\/\/+/, "/")
      file = File.join(APP_ROOT, "public", path)
      if File.file?(file)
        res.status = 200
        content_type = @@content_types[file.split(".").last.to_sym] || "text/plain"
        res.content_type(content_type)
        res.content = File.binread(file)
        puts "HTTP: Serving #{content_type}: #{file}"
        res.send_response
      else
        res.status = 404
        res.send_response
      end
    end
  end
  
  def parse_command(user, msg)
    if msg.class == Array
      msg.each do |m|
        m.each_pair do |k, v|
          controller, mthd = *k.split(".")
          process_command user, controller.to_sym, mthd, v
        end
      end
    elsif msg.class == Hash
      msg.each_pair do |k, v|
        controller, mthd = *k.split(".")
        process_command user, controller.to_sym, mthd, v
      end
    end
  end
  
  def run
    EventMachine.run do
      
      @redis = EM::Protocols::Redis.connect
      @redis.errback do |code|
        puts "REDIS ERROR: #{code}"
      end
      
      @mongo = EM::Mongo::Connection.new.db(APP_NAME)
      
      Rocket.models.each_pair do |k, v|
        v.set_db @mongo
      end
      
      @redis_message_queue_connection = EM::Protocols::Redis.connect
      @redis_message_queue_connection.errback do |code|
        puts "REDIS message queue connection ERROR: #{code}"
      end
      
      @redis.incr "server_ids" do |id|
        @server_id = id
        process_message_queue
      end
      
      EventMachine::WebSocket.start(host: "0.0.0.0", port: 9185) do |ws|
        ws.onopen do
          RocketUser.create(ws)
        end
        
        ws.onclose do
          
        end
        
        ws.onmessage do |json_msg|
          begin
            user = get_local_user(ws.signature)
            if user
              msg = JSON.parse(json_msg)
              parse_command(user, msg)
            end
          rescue => ex
            show_error ex
          end
        end
      end
  
      EM.start_server '0.0.0.0', 9346, RocketHttpServer
    end
  end
end