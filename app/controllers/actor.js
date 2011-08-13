ActorController = function() {
  this.index = function(args) {
    $("#content").html(templates.actor.index(args))
  }
  
  this.show = function(args) {
    $("#content").html(templates.actor.show(args))
  }
  
  this.edit = function(args) {
    $("#content").html(templates.actor.edit(args))
  }
}