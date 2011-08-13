class AppController
  bolt Rocket::Controller
  
  define_action :about do
    current_user.transmit({"App.about" => ""})
  end
  
  define_action :upload do
    current_user.transmit({"App.upload" => ""})
  end
  
end