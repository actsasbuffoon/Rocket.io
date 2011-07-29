MovieController = function() {
  this.index = function(args) {
    $("#content").html(templates.movie.index(args))
  }

  this.show = function(args) {
    $("#content").html(templates.movie.show(args))
  }
  
  this.edit = function(args) {
    $("#content").html(templates.movie.edit(args))
  }
}