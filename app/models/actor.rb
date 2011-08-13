class Actor
  include Mongoid::Document
  
  field :first_name, type: String
  field :last_name, type: String
  
  validates_presence_of :first_name
  validates_presence_of :last_name
  
  has_and_belongs_to_many :movies
  
end