class Rocket
  module Model
    
    on_bolted do |cls|
      cls.instance_variable_set "@relations", {}
    end
    
    def self.get_class(cls)
      cls = cls.to_s.classify
      begin
        c = cls.constantize
      rescue
        Object.const_set cls.to_sym, Class.new
        c = cls.constantize
      end
      c
    end
    
    module ClassMethods
      
      def relations
        @relations
      end
      
      def has_many(cls, args = {})
        @relations[cls] = {class: Rocket::Model.get_class(cls.to_s.singularize), type: :has_many}
        
      end
      
      def belongs_to(cls, args = {})
        klass = Rocket::Model.get_class(cls)
        @relations[cls] = {class: klass, type: :belongs_to, id: (args[:id] || "#{cls}_id".to_sym)}
        
        define_method cls do
          klass.find id: @attributes[self.class.relations[cls][:id]]
        end
        
        define_method "#{cls}=".to_sym do |other|
          if other.class == klass
            @attributes[self.class.relations[cls][:id]] = other._id
          elsif other.class == BSON::ObjectId
            @attributes[self.class.relations[cls][:id]] = other
          elsif other.class == String
            @attributes[self.class.relations[cls][:id]] = BSON::ObjectId(other)
          else
            raise "InvalidRelationId: #{other.inspect}"
          end
        end
      end
      
      def embeds_many(cls, args = {})
        @relations[cls] = {class: Rocket::Model.get_class(cls.to_s.singularize), type: :embeds_many}
        
      end
      
      def embedded_by(cls, args = {})
        @relations[cls] = {class: Rocket::Model.get_class(cls), type: :embedded_by}
        
      end
    end
    
    module InstanceMethods
      
    end
  end
end