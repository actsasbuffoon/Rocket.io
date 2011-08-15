var jade = require('jade')
var socket = false
var first_connect = false

rocket = function(msg) {
  if (socket && socket.readyState == 1) {
    console.log("Sending message to server:")
    console.log(msg)
    socket.send( JSON.stringify(msg) )
  }
  else {
    setTimeout(function() {
      rocket(msg)
    }, reconnect_interval)
  }
}

$(document).ready(function() {
  
  reconnect_interval = 5000
  
  connect = function() {
    if (!socket || socket.readyState != 1) {
      console.log("Attempting to connect to the WebSocket server.")
      socket = new WebSocket("ws://localhost:9185")

      try {
        socket.onopen = function() {
          if (!first_connect) {
            $("body").html(templates.app.layout())
            rocket({"Movie.index": ""})
          }
          first_connect = true
          console.log("Connected to server")
        }

        socket.onmessage = function(msg) {
          console.log("Received message: " + msg.data)
          cmd = JSON.parse(msg.data)
          for (var k in cmd) {
            k_parts = k.split(".")
            k_parts[0] = k_parts[0] + "Controller"
            sk = k_parts.join(".")
            console.log("controllers." + sk)
            fnc = eval("controllers." + sk)
            fnc(cmd[k])
          }
        }

        socket.onclose = function() {
          console.log("Lost connection to server.")
          socket = false
          setTimeout(function() {
            connect()
          }, reconnect_interval)
        }
      }
      catch(err) {
        console.log("Could not connect: " + err)
      }
    }
  }
  
  connect()
  
  $("input[type=submit]").live("click", function(evnt) {submit_callback(evnt)})
  
})