class Movie
  bolt Rocket::Model
  
  field :_id, :id
  field :name, :string
  field :year, :int
  field :stars, :int
  field :description, :string
  
  validates_numericality_of :year
  validates_numericality_of :stars
  validates_presence_of :name
  validates_presence_of :description
  
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