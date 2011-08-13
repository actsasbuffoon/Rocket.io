AppController = function() {
  
  // Notice that form_errors and show_message aren't on the serverside controller. We're just
  // using the app controller as a convenient place to hold some global helpers.
  this.form_errors = function(args) {
    $("#form_errors").html(templates.app.form_errors(args))
  }
  
  this.about = function(args) {
    $("#content").html(templates.app.about(args))
  }
  
  this.upload = function(args) {
    $("#content").html(templates.app.upload(args))
  }
  
  this.show_message = function(args) {
    $.gritter.add({
      title: args["title"],
      text: args["msg"],
      sticky: false,
      time: 8000
    })
  }
}