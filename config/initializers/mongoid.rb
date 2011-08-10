Mongoid.load!(File.join APP_ROOT, "config", "mongoid.yml")
Mongoid.configure do |config|
  config.master = Mongo::Connection.new.db(APP_NAME)
end