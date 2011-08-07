class Bar
  bolt Rocket::Model
  
  field :_id, :id
  field :name, :string
  
  belongs_to :foo
end