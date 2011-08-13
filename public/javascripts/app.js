var jade = require('jade')
var socket = false
var first_connect = false

var r = false

var file_chunk_size = 1024 * 50

function readfile(start) {
  
  file = document.getElementById('fileupload').files[0]
  
  document.getElementById('filename').innerHTML = document.getElementById('fileupload').files[0].fileName
  document.getElementById('filesize').innerHTML = size_estimator(document.getElementById('fileupload').files[0].fileSize)
  
  r = new FileReader()
  
  r.loadstart = function(e) {
    console.log("Starting to load")
  }
  
  r.onload = function(e) {
    console.log("running onload()")
    //document.getElementById('filecontent').innerHTML = Base64.encode(e.target.result)
    document.getElementById('filecontent').innerHTML = document.getElementById('filecontent').innerHTML + "<br /><br />* * * * * * * * * * * * * * * * * * * *<br /><br />" + e.target.result
    if (start + file_chunk_size < file.fileSize) {
      console.log("Run the method again")
      $("#uploadbar").progressbar({value: (start + file_chunk_size) / file.fileSize * 100})
      //setTimeout(function() { readfile(start + file_chunk_size) }, 100)
      readfile(start + file_chunk_size)
    }
    else {
      $("#uploadbar").progressbar({value: 100})
      console.log("Stop the method.")
    }
  }
  
  r.onerror = function(e) {
    console.log("ERROR")
    console.log(e)
  }
  
  if (start == undefined) {
    start = 0
    $("#filecontent").html("")
  }
  console.log(start)
  console.log(file.fileSize)
  if (start + file_chunk_size > file.fileSize) {
    console.log("finish")
    r.readAsBinaryString(file.webkitSlice(start, file.fileSize))
    console.log("" + start + ", " + file.fileSize)
  }
  else {
    console.log("more file remaining")
    r.readAsBinaryString(file.webkitSlice(start, start + file_chunk_size))
    console.log("" + start + ", " + (start + file_chunk_size))
  }
}

var submit_callback = function(evnt) {
  evnt.preventDefault()
  elem = $(evnt.target)
  frm = $(elem.parents("form"))
  vals = {}
  vals["_method"] = frm.attr("method") || "POST"
  frm.find("input, textarea, select").each(function(i, e) {
    el = $(e)
    if (el.val()) {
      console.log(e)
      vals[el.attr("name")] = el.val()
    }
    else {
      vals[el.attr("name")] = null
    }
  })
  obj = {}
  obj[frm.attr("action")] = vals
  rocket(obj)
}

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