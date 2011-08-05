controllers = {}


// * * * * * Dump of controllers.AppController * * * * *


controllers.AppController = {}


// * * * * * Dump of controllers.AppController.form_errors * * * * *


controllers.AppController.form_errors = function (errors) {
    $("#form_errors").html(templates.app.form_errors(errors))
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