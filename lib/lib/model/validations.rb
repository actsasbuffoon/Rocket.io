class Rocket
  module Model
    
    module ClassMethods
      @@validations = {}
      
      def validates(field, *args)
        if args.last.class == Hash
          t_args = args.last
        else
          t_args = {}
        end
        t_args[:method] = args.shift
        @@validations[field] ||= []
        @@validations[field] << t_args
      end
      
      def validates_format_of(field, args = {})
        validator = Proc.new() do |rec|
          rec.send(field) =~ args[:match]
        end
        validates field, validator, message: (args[:message] || "#{field} is not formatted correctly.")
      end
      
      def validates_minimum_length_of(field, args = {})
        validator = Proc.new() do |rec|
          rec.send(field).length > args[:minimum]
        end
        validates field, validator, message: (args[:message] || "#{field} must be at least #{args[:minimum]} characters long.")
      end
      
      def validates_maximum_length_of(field, args = {})
        validator = Proc.new() do |rec|
          rec.send(field).length > args[:maximum]
        end
        validates field, validator, message: (args[:message] || "#{field} must be #{args[:maximum]} or fewer characters long.")
      end
      
      def validates_length_of(field, args = {})
        if args[:minimum] && args[:maximum]
          validator = Proc.new() do |rec|
            rec.send(field).to_s.length.between? args[:minimum], args[:maximum]
          end
          validates field, validator, message: (args[:message] || "#{field} must be between #{args[:minimum]} and #{args[:maximum]} characters long.")
        elsif args[:minimum]
          validates_minimum_length_of field, args
        elsif args[:maximum]
          validates_maximum_length_of field, args
        end
      end
      
      def validates_inclusion_of(field, args = {})
        validator = Proc.new() do |rec|
          args[:in].include?(rec.send field)
        end
        validates field, validator, message: (args[:message] || "#{field} is not a permitted value.")
      end
      
      def validates_exclusion_of(field, args = {})
        validator = Proc.new() do |rec|
          !args[:in].include?(rec.send field)
        end
        validates field, validator, message: (args[:message] || "#{field} is a forbidden value.")
      end
      
      def validates_presence_of(field, args = {})
        validator = Proc.new() do |rec|
          rec.send(field).to_s.length > 0
        end
        validates field, validator, message: (args[:message] || "#{field} is required.")
      end
      
      def validates_numericality_of(field, args = {})
        validator = Proc.new() do |rec|
          rec.send(field).to_s =~ /^\d+\.?\d*$/
        end
        validates field, validator, message: (args[:message] || "#{field} must be a number.")
      end
      
      def validations
        @@validations
      end
    end
    
    module InstanceMethods
      def errors
        @errors
      end
      
      def validate_fields
        @errors = []
        @attributes.each_pair do |k, v|
          if self.class.validations[k]
            puts "Validating #{k} with #{self.class.validations[k].inspect}"
            validations = self.class.validations[k]
            validations.each do |validator|
              if validator[:method]
                if validator[:method].class == Symbol
                  if !self.send(validator[:method])
                    @errors << validator[:message] || "There is a problem with #{k}."
                  end
                elsif validator[:method].class == Proc
                  if !validator[:method].call(self)
                    @errors << (validator[:message] || "There is a problem with #{k}.")
                  end
                else
                  raise "UnknownValidatorType: #{validator[:method].class}"
                end
              end
            end
          end
        end
        @errors.length == 0
      end
      
    end
    
  end
end