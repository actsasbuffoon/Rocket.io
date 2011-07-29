class String
  
  def class_case
    r = self[0].upcase
    r += self[1..self.length]
    r = r.gsub(/_(\w)/) {|s| $1.upcase}
    r
  end
  
  def snake_case
    self.gsub(/([a-z])([A-Z])/) {|s| "#{s[0]}_#{s[1]}"}.gsub(/([A-Z])([A-Z][a-z])/) {|s| "#{s[0]}_#{s[1..2]}"}.downcase
  end
  
end

module EventMachine
  module Protocols
    module Redis
      def blpop(*lists, timeout)
        call_command([:blpop, *lists, timeout]) do |s|
          yield s if block_given?
        end
      end
    end
  end
end

module BSON
  class ObjectId
    def to_json(*args)
      v = super
      v
    end
  end
end