controllers = {}


// * * * * * Dump of controllers.MovieController * * * * *


controllers.MovieController = {}


// * * * * * Dump of controllers.MovieController.about * * * * *


controllers.MovieController.about = function (args) {
    $("#content").html(templates.movie.about(args))
  }