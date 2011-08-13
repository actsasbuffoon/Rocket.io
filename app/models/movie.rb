class Movie
  include Mongoid::Document
  
  field :name, type: String
  field :stars, type: Integer
  field :year, type: Integer
  field :description, type: String
  
  validates_presence_of :name
  validates_presence_of :description
  
  has_and_belongs_to_many :actors
end