AppController = function() {
  this.form_errors = function(errors) {
    $("#form_errors").html(templates.app.form_errors(errors))
  }
}