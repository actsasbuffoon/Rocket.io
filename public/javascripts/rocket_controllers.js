controllers = {}


// * * * * * Dump of controllers.MovieController * * * * *


controllers.MovieController = {}


// * * * * * Dump of controllers.MovieController.index * * * * *


controllers.MovieController.index = function (args) {
    $("#content").html(templates.movie.index(args))
  }


// * * * * * Dump of controllers.MovieController.show * * * * *


controllers.MovieController.show = function (args) {
    $("#content").html(templates.movie.show(args))
  }


// * * * * * Dump of controllers.MovieController.edit * * * * *


controllers.MovieController.edit = function (args) {
    $("#content").html(templates.movie.edit(args))
  }