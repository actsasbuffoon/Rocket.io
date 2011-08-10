class MovieController
  bolt Rocket::Controller
  
  define_action :index do
    movies = Movie.all
    current_user.transmit({"Movie.index" => {movies: movies}})
  end
  
  define_action :show do
    movie = Movie.find(args["_id"])
    current_user.transmit({"Movie.show" => {movie: movie}})
  end
  
  define_action :new do
    current_user.transmit "Movie.edit" => {id: nil, movie: {}, title: "Create Movie Listing", action: "Movie.create"}
  end
  
  define_action :create do
    movie = Movie.new(params["movie"])
    if movie.save
      current_user.transmit({
        "Movie.show" => {movie: movie},
        "App.show_message" => {title: "Notice", msg: "The entry has been successfully created."}
      })
    else
      current_user.transmit "App.form_errors" => {errors: movie.errors}
    end
  end
  
  define_action :edit do
    movie = Movie.find(args["id"])
    current_user.transmit "Movie.edit" => {id: args["id"], movie: movie, title: "Update Movie Listing", action: "Movie.update"}
  end
  
  define_action :update do
    movie = Movie.find(params["movie"]["_id"])
    if movie.update_attributes(params["movie"])
      current_user.transmit({
        "Movie.show" => {movie: movie},
        "App.show_message" => {title: "Notice", msg: "The entry has been successfully updated."}
      })
    else
      current_user.transmit "App.form_errors" => {errors: movie.errors}
    end
  end
  
  define_action :delete do
    Movie.find(args["id"]).destroy
    current_user.transmit({"App.show_message" => {title: "Notice", msg: "The entry has been successfully deleted."}})
    redirect({"Movie.index" => ""})
  end
  
end