controllers = {}


// * * * * * Dump of controllers.AppController * * * * *


controllers.AppController = {}


// * * * * * Dump of controllers.AppController.form_errors * * * * *


controllers.AppController.form_errors = function (args) {
    $("#form_errors").html(templates.app.form_errors(args))
  }


// * * * * * Dump of controllers.AppController.about * * * * *


controllers.AppController.about = function (args) {
    $("#content").html(templates.app.about(args))
  }


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


// * * * * * Dump of controllers.MovieController.about * * * * *


controllers.MovieController.about = function (args) {
    $("#content").html(templates.movie.about(args))
  }