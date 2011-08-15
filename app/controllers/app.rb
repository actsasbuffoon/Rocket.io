class AppController
  bolt Rocket::Controller
  
  define_action :about do
    current_user.transmit({"App.about" => ""})
  end
  
end