class Rocket
  
  @@controllers = {}

  def self.controllers
    @@controllers
  end
  
  module Controller
    
    def self.bolted(other)
      Rocket.controllers[other.to_s.sub(/Controller$/, "").to_sym] = other
    end
    
    module ClassMethods
      def define_action(name, &blk)
        @actions ||= {}
        @actions[name.to_sym] = blk
      end
      
      def actions
        @actions
      end
      
      def params
        @params
      end
      
      def current_user
        @current_user
      end
      
      def args
        @args
      end
      
      def set_params(o)
        @params = o
      end
      
      def set_current_user(o)
        @current_user = o
      end
      
      def set_args(o)
        @args = o
      end
    end
    
    module InstanceMethods
      def initialize
        
      end
      
      def paramify(hsh)
        t = {}
        hsh.each_pair do |k, v|
          chunks = k.split("[").map {|s| s.sub /\]$/, ""}
          if chunks.length > 1
            iter = t
            chunks.each_with_index do |c, i|
              if i+1 == chunks.length
                iter[c] = v
              else
                iter[c] ||= {}
              end
              iter = iter[c]
            end
          else
            t[k] = v
          end
        end
        t
      end
      
      def process_command(user, command, args, params = nil)
        command = command.to_sym
        if self.class.actions.include?(command)
          if params
            self.class.set_params(args["params"] ? params.merge(paramify(args.delete "params")) : params)
          else
            self.class.set_params(args["params"] ? paramify(args.delete "params") : nil)
          end
          self.class.set_current_user user
          self.class.set_args args
          self.class.actions[command.to_sym].call
        else
          raise "Class #{self.class} does not have an action named #{command}"
        end
      end
    end
  end
  
  Dir[File.join(APP_ROOT, "app", "controllers", "*.rb")].each do |f|
    require File.expand_path(f)
  end
  
end