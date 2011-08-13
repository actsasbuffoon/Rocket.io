class ActorController
  bolt Rocket::Controller
  
  define_action :index do
    actors = Actor.all
    current_user.transmit({"Actor.index" => {actors: actors}})
  end
  
  define_action :show do
    actor = Actor.find(params["_id"])
    current_user.transmit({"Actor.show" => {actor: actor}})
  end
  
  define_action :new do
    current_user.transmit "Actor.edit" => {id: nil, actor: {}, title: "Create Actor Listing", action: "Actor.create"}
  end
  
  define_action :create do
    actor = Actor.new(params["actor"])
    if actor.save
      current_user.transmit({
        "Actor.show" => {actor: actor},
        "App.show_message" => {title: "Notice", msg: "The entry has been successfully created."}
      })
    else
      current_user.transmit "App.form_errors" => {errors: actor.errors}
    end
  end
  
  define_action :edit do
    actor = Actor.find(params["id"])
    current_user.transmit "Actor.edit" => {id: args["id"], actor: actor, title: "Update Actor Listing", action: "Actor.update"}
  end
  
  define_action :update do
    actor = Actor.find(params["actor"]["_id"])
    if actor.update_attributes(params["actor"])
      current_user.transmit({
        "Actor.show" => {actor: actor},
        "App.show_message" => {title: "Notice", msg: "The entry has been successfully updated."}
      })
    else
      current_user.transmit "App.form_errors" => {errors: actor.errors}
    end
  end
  
  define_action :delete do
    Actor.find(params["id"]).destroy
    current_user.transmit({"App.show_message" => {title: "Notice", msg: "The entry has been successfully deleted."}})
    redirect({"Actor.index" => ""})
  end
  
end