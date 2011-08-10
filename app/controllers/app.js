AppController = function() {
  this.form_errors = function(args) {
    $("#form_errors").html(templates.app.form_errors(args))
  }
  
  this.about = function(args) {
    $("#content").html(templates.app.about(args))
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