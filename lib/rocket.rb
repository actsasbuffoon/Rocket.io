require 'eventmachine'
require 'em-websocket'
require 'ap'
require 'em-redis'
require 'em-mongo'
require 'evma_httpserver'
require 'json'
require 'v8'
require 'slop'
require 'nokogiri'

APP_NAME = "movie_app"

APP_ROOT = File.join *File.dirname(File.expand_path __FILE__).split("/").slice(0..-2)
require File.join(APP_ROOT, "lib", "lib", 'monkey_patches.rb')
require File.join(APP_ROOT, "lib", "lib", 'bolt.rb')
require File.join(APP_ROOT, "lib", "lib", 'initializer.rb')
require File.join(APP_ROOT, "lib", "lib", 'rocket_user.rb')
require File.join(APP_ROOT, "lib", "lib", 'controller.rb')
require File.join(APP_ROOT, "lib", "lib", 'model.rb')
require File.join(APP_ROOT, "lib", "lib", 'docs.rb')
require File.join(APP_ROOT, "lib", "lib", 'runner.rb')

ROCKET = Rocket.new

#ROCKET.compile_docs

ROCKET.prepare_js
ROCKET.run