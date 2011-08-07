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
    @bolted_callbacks = []
    
    def self.on_bolted(&blk)
      @bolted_callbacks << blk
    end
    # Handles basic CRUD operations, type casting, validations, and basic relations
    
    # A callback that runs after a class bolts ModelRocket. Should not need
    # to be called directly by users.
    def self.bolted(other)
      @bolted_callbacks.each {|cb| cb.call(other)}
    end
    
    on_bolted do |other|
      Rocket.models[other.to_s.to_sym] = other
      other.instance_variable_set :@fields, {}
      other.instance_variable_set :@collection, nil
    end
    
    module ClassMethods
      
      def set_db(db)
        @collection = db.collection(self.class.to_s.snake_case)
      end
      
      # Finds one record and passes it to the callback.
      def find_one(args = {}, &callback)
        targs = {}
        args.each_pair do |k, v|
          if @fields[k.to_sym]
            targs[k.to_sym] = Rocket::Model.conversion_methods[@fields[k.to_sym]].call v
          else
            targs[k.to_sym] = v
          end
        end
        @collection.find(targs, {limit: 1}) do |result|
          callback.call self.new(result.first)
        end
      end
      
      # Finds multiple records and passes them to the callback.
      def find(args = {}, &callback)
        @collection.find(args) do |result|
          callback.call result.to_a.map {|r| self.new r}
        end
      end
      
      # This is how you define a field in ModelRocket. Fields are useful for
      # automatic type conversion, validation, etc.
      def field(name, type)
        @fields ||= {}
        @fields[name] = type
        define_method name do
          @attributes[name]
        end
        
        define_method "#{name}=".to_sym do |val|
          @attributes[name] = Rocket::Model.conversion_methods[type].call val
        end
      end
      
      def fields
        @fields
      end
      
      def collection
        @collection
      end
      
    end
    
    module InstanceMethods
      
      # Saves a record and runs the callback on completion.
      def save(&callback)
        run_callback :before_validation
        if validate_fields
          run_callback :after_validation
          if !@new_record
            run_callback :before_save
            run_callback :before_update
            id = self._id
            self.class.collection.update({_id: self._id}, @attributes, upsert: true)
            run_callback :after_save
            run_callback :after_update
          else
            run_callback :before_save
            run_callback :before_create
            id = self.class.collection.save @attributes
            run_callback :after_save
            run_callback :after_create
          end
          self.class.find({_id: id}) do |record|
            callback.call(record.first, true)
          end
        else
          callback.call(self, false)
        end
      end
      
      # Destroys the record and runs the callback on completion.
      def destroy(&callback)
        run_callback :before_destroy
        if !@new_record
          self.class.collection.remove({_id: @attributes["_id"]})
          callback.call true
        else
          callback.call false
        end
        run_callback :after_destroy
      end
      
      # Takes a hash and turns it into an instance of your class. Runs
      # the data through any required converters as well.
      def initialize(args)
        @attributes = {}
        if !args[:_id]
          @attributes[:_id] = BSON::ObjectId.new
          @new_record = true
        else
          @new_record = false
        end
          
        if args
          args.each_pair do |k, v|
            k = k.to_sym
            if self.class.fields[k.to_sym]
              v = convert_field(v, self.class.fields[k.to_sym])
            end
            @attributes[k] = v
          end
        end
        if self.class.fields && self.class.fields.length > 0
          self.class.fields.each_pair do |f, v|
            @attributes[f] ||= nil
          end
        end
        if self.class.relations && self.class.relations.length > 0
          self.class.relations.each_pair do |cls, relation|
            @attributes[relation[:id]] ||= nil if relation[:id]
          end
        end
      end
      
      def attributes
        @attributes
      end
      
      # Merges the contents of the hash argument into the object. Note that
      # this does not save the record!
      def update(args)
        args.each_pair do |k, v|
          self.send("#{k}=", v)
        end
      end
      
      def to_json(*args)
        @attributes.to_json()
      end
    end
    
  end
  
end

Dir[File.join(APP_ROOT, "lib", "lib", "model", "*.rb")].each do |f|
  require File.expand_path(f)
end

Dir[File.join(APP_ROOT, "app", "models", "*.rb")].each do |f|
  require File.expand_path(f)
end