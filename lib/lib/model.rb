# ModelRocket is the ORM component of Rocket.io. It handles a relatively
# simple subset of the capabilities found in most ORMs, with the most
# important factor being a simple and consistent API.
#
# Everything in Rocket.io must be evented, and ModelRocket is no exception.

class Rocket
  
  @@models = {}
  
  def self.models
    @@models
  end
  
  module Model
    # Handles basic CRUD operations, type casting, validations, and basic relations
    
    @conversion_methods = {}
    
    # A callback that runs after a class bolts ModelRocket. Should not need
    # to be called directly by users.
    def self.bolted(other)
      Rocket.models[other.to_s.to_sym] = other
    end
    
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
      v.to_i
    end
    
    define_converter(:string) do |v|
      v.to_s
    end
    
    define_converter(:float) do |v|
      v.to_f
    end
    
    define_converter(:id) do |v|
      if v.class == BSON::ObjectId
        v
      elsif v.class == Hash
        BSON::ObjectId(v["$oid"])
      else
        BSON::ObjectId(v)
      end
    end
    
    module ClassMethods
      
      @@fields = {}
      @@collection = nil
      
      def set_db(db)
        @@collection = db.collection(self.class.to_s.snake_case)
      end
      
      # Finds one record and passes it to the callback.
      def find_one(args = {}, &callback)
        targs = {}
        args.each_pair do |k, v|
          if @@fields[k.to_sym]
            targs[k.to_sym] = Rocket::Model.conversion_methods[@@fields[k.to_sym]].call v
          else
            targs[k.to_sym] = v
          end
        end
        @@collection.find(targs, {limit: 1}) do |result|
          callback.call self.new(result.first)
        end
      end
      
      # Finds multiple records and passes them to the callback.
      def find(args = {}, &callback)
        @@collection.find(args) do |result|
          callback.call result.to_a.map {|r| self.new r}
        end
      end
      
      # This is how you define a field in ModelRocket. Fields are useful for
      # automatic type conversion, validation, etc.
      def field(name, type)
        @@fields ||= {}
        @@fields[name] = type
        define_method name do
          @attributes[name]
        end
        
        define_method "#{name}=".to_sym do |val|
          @attributes[name] = Rocket::Model.conversion_methods[type].call val
        end
      end
      
      def fields
        @@fields
      end
      
      def collection
        @@collection
      end
      
    end
    
    module InstanceMethods
      
      # Saves a record and runs the callback on completion.
      def save(&callback)
        if self._id
          id = self._id
          self.class.collection.update({_id: self._id}, @attributes, upsert: true)
        else
          id = self.class.collection.save @attributes
        end
        self.class.find({_id: id}) do |record|
          callback.call(record.first)
        end
      end
      
      def attributes
        @attributes
      end
      
      # Destroys the record and runs the callback on completion.
      def destroy(&callback)
        if @attributes["_id"]
          self.class.collection.remove({_id: @attributes["_id"]})
          callback.call true
        else
          callback.call false
        end
      end
      
      # Takes a hash and turns it into an instance of your class. Runs
      # the data through any required converters as well.
      def initialize(args)
        @attributes = {}
        args.each_pair do |k, v|
          if self.class.fields[k.to_sym]
            v = convert_field(v, self.class.fields[k.to_sym])
          end
          @attributes[k] = v
        end
      end
      
      # Merges the contents of the hash argument into the object. Note that
      # this does not save the record!
      def update(args)
        args.each_pair do |k, v|
          self.send("#{k}=", v)
        end
      end
      
      def to_json(*args)
        attributes.to_json()
      end
      
      private
      def convert_field(value, type)
        Rocket::Model.conversion_methods[type].call value
      end
    end
    
  end
  
  Dir[File.join(APP_ROOT, "app", "models", "*.rb")].each do |f|
    require File.expand_path(f)
  end
  
end