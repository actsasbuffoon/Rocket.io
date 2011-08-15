controllers = {}


// * * * * * Dump of controllers.ActorController * * * * *


controllers.ActorController = {}


// * * * * * Dump of controllers.ActorController.index * * * * *


controllers.ActorController.index = function (args) {
    $("#content").html(templates.actor.index(args))
  }


// * * * * * Dump of controllers.ActorController.show * * * * *


controllers.ActorController.show = function (args) {
    $("#content").html(templates.actor.show(args))
  }


// * * * * * Dump of controllers.ActorController.edit * * * * *


controllers.ActorController.edit = function (args) {
    $("#content").html(templates.actor.edit(args))
  }


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


// * * * * * Dump of controllers.AppController.show_message * * * * *


controllers.AppController.show_message = function (args) {
    $.gritter.add({
      title: args["title"],
      text: args["msg"],
      sticky: false,
      time: 8000
    })
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