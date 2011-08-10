APP_ROOT = File.join *File.dirname(File.expand_path __FILE__).split("/").slice(0..-2)

require 'rubygems'
require 'mongoid'
#require 'em-synchrony'
#require 'em-synchrony/em-redis'
#require 'em-synchrony/mongoid'
require File.expand_path(File.join APP_ROOT, "vendor", "em-synchrony", "lib", "em-synchrony.rb")
require File.expand_path(File.join APP_ROOT, "vendor", "em-synchrony", "lib", "em-synchrony", "em-redis.rb")
require File.expand_path(File.join APP_ROOT, "vendor", "em-synchrony", "lib", "em-synchrony", "mongo.rb")
require 'thin'
require 'sinatra/async'
require 'em-websocket'
require 'json'
require 'v8'
require 'nokogiri'
require 'active_support'
require 'active_support/core_ext/string'

APP_NAME = "movie_app"

require File.join(APP_ROOT, "lib", "lib", 'monkey_patches.rb')
require File.join(APP_ROOT, "lib", "lib", 'bolt.rb')
require File.join(APP_ROOT, "lib", "lib", 'initializer.rb')
require File.join(APP_ROOT, "lib", "lib", 'rocket_user.rb')
require File.join(APP_ROOT, "lib", "lib", 'controller.rb')
require File.join(APP_ROOT, "lib", "lib", 'docs.rb')
require File.join(APP_ROOT, "lib", "lib", 'runner.rb')

Dir[File.join APP_ROOT, "app", "models", "*.rb"].each do |file|
  require file
end

ROCKET = Rocket.new

ROCKET.compile_docs

ROCKET.prepare_js
ROCKET.run