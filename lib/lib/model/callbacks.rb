class Rocket
  module Model
    
    on_bolted do |cls|
      cls.instance_variable_set "@callbacks".to_sym, {
        before_validation: [],
        after_validation: [],
        before_save: [],
        after_save: [],
        before_create: [],
        after_create: [],
        before_update: [],
        after_update: [],
        before_destroy: [],
        after_destroy: []
      }
    end
    
    module ClassMethods
      
      def callback(cb, mthd)
        if cb.respond_to?(:each)
          cb.each do |c|
            @callbacks[c] << mthd
            @callbacks[c].flatten!
          end
        else
          @callbacks[cb] << mthd
          @callbacks[cb].flatten!
        end
      end
      
      def callbacks
        @callbacks
      end
      
    end
    
    module InstanceMethods
      def run_callback(cb)
        self.class.callbacks[cb].each do |c|
          if c.class == Symbol
            self.send c
          elsif c.class == Proc
            c.call
          else
            raise "UnsupportedCallbackType: #{c.class}"
          end
        end
      end
    end
  end
end