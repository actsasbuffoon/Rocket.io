class MovieController
  bolt Rocket::Controller
  
  define_action :index do
    movies = Movie.all
    current_user.transmit({"Movie.index" => {movies: movies}})
  end
  
  define_action :show do
    movie = Movie.find(params["_id"])
    current_user.transmit({"Movie.show" => {movie: movie}})
  end
  
  define_action :new do
    current_user.transmit "Movie.edit" => {id: nil, movie: {}, title: "Create Movie Listing", action: "Movie.create"}
  end
  
  # Notice how we bundle two messages together in this action. Movie.show and App.show_message
  # are both going to be called, but sent in one batch. Due to the unordered nature of Ruby hashes,
  # you cannot predict when one action will run before another. Perfect for notifications like this.
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
    movie = Movie.find(params["id"])
    current_user.transmit "Movie.edit" => {id: params["id"], movie: movie, title: "Update Movie Listing", action: "Movie.update"}
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
    Movie.find(params["id"]).destroy
    # We can send a message to the user even before we finish processing the action!
    current_user.transmit({"App.show_message" => {title: "Notice", msg: "The entry has been successfully deleted."}})
    # Technically, you could probably redirect more than once in a given action. Not really sure
    # what would happen. In the words of Doctor Emmit Brown, it could create a paradox that would
    # destroy the entire universe. On the other hand, the destruction could be local, merely destroying
    # our galaxy. Either that, or the user would be non-deterministically directed to a few pages in
    # rapid succession. That would probably be bad if you're building a site for epileptic people.
    redirect({"Movie.index" => ""})
  end
  
end