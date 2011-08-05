class Rocket
  module Model
    @conversion_methods = {}
    
    # A hash of procs that will be run to cast variables to the correct format.
    def self.conversion_methods
      @conversion_methods
    end
    
    # This is how you tell ModelRocket how to convert data into whatever type
    # you need. Since most data in Rocket.io will come from JSON, and all JSON values
    # are strings, this is pretty much essential.
    #
    # You might write something like this inside your model class:
    # class Movie
    #   bolt Rocket::Model
    #
    #   define_converter(:integer) do |value|
    #     value.to_i
    #   end
    # end
    def self.define_converter(type, &callback)
      @conversion_methods[type.to_sym] = callback
    end
    
    define_converter(:int) do |v|
      if v.nil?
        nil
      elsif v =~ /^\d+\.?\d*$/
        v.to_i
      else
        v
      end
    end
    
    define_converter(:float) do |v|
      if v.nil?
        nil
      elsif v =~ /^\d+\.?\d*$/
        v.to_f
      else
        v
      end
    end
    
    define_converter(:string) do |v|
      v.to_s
    end
    
    define_converter(:id) do |v|
      if v.nil?
        nil
      elsif v.class == BSON::ObjectId
        v
      elsif v.class == Hash
        BSON::ObjectId(v["$oid"])
      else
        BSON::ObjectId(v)
      end
    end
    
    module InstanceMethods
      def convert_field(value, type)
        Rocket::Model.conversion_methods[type].call value
      end
    end
    
  end
end