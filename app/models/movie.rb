class Movie
  bolt Rocket::Model
  
  field :_id, :id
  field :name, :string
  field :year, :int
  field :stars, :int
  field :description, :string
  
  validates_numericality_of :year
  validates_numericality_of :stars
  validates_length_of :year, minimum: 1870, maximum: Time.now.year, message: "The year cannot be later than the current year, nor can it land before the invention of the movie camera."
  validates_presence_of :name
  validates_presence_of :description
  
  callback :before_validation, Proc.new() {puts "I'm about to validate. Woohoo!"}
  
  # acceptance (like TOS)
  # associated (only allow if associated records work, too)
  # confirmation (like matching password fields)
  # uniqueness
  # Allow conditional checking based on a function, symbol, or proc/block/lambda
  # Standard types can be made to work in Ruby and JS, but what about custom ones?
  # Perhaps there should be a way of specifying where you want a given validation to occur (server, client, or both).
  
  # Callbacks for creation:
  # before_validation, after_validation, before_save, before_create, after_create, after_save
  
  # Callbacks for update:
  # before_validation, after_validation, before_save, before_update, after_update, after_save
  
  # Callbacks for destroy:
  # before_destroy, after_destroy
  
  # Controller callbacks:
  # before, after
end