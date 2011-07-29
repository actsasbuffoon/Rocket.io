class MovieController
  bolt Rocket::Controller
  
  define_action :index do
    Movie.find do |movies|
      current_user.transmit({"Movie.index" => {movies: movies}})
    end
  end
  
  define_action :show do
    Movie.find_one("_id" => args["_id"]) do |movie|
      current_user.transmit "Movie.show" => {movie: movie}
    end
  end
  
  define_action :new do
    current_user.transmit "Movie.edit" => {id: nil, movie: {}, title: "Create Movie Listing", action: "Movie.create"}
  end
  
  define_action :create do
    Movie.new(params["movie"]).save do |movie|
      current_user.transmit "Movie.show" => {movie: movie}
    end
  end
  
  define_action :edit do
    Movie.find_one(_id: args["id"]) do |movie|
      current_user.transmit "Movie.edit" => {id: args["id"], movie: movie, title: "Update Movie Listing", action: "Movie.update"}
    end
  end
  
  define_action :update do
    puts params.inspect
    Movie.find_one(_id: params["movie"]["_id"]) do |movie|
      movie.update params["movie"]
      movie.save do |mv|
        current_user.transmit "Movie.show" => {movie: mv}
      end
    end
  end
  
  define_action :delete do
    Movie.find_one(_id: args["id"]) do |movie|
      movie.destroy do
        Movie.find do |movies|
          current_user.transmit({"Movie.index" => {movies: movies}})
        end
      end
    end
  end
end