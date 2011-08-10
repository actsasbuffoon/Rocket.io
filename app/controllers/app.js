AppController = function() {
  this.form_errors = function(args) {
    $("#form_errors").html(templates.app.form_errors(args))
  }
  
  this.about = function(args) {
    $("#content").html(templates.app.about(args))
  }
}