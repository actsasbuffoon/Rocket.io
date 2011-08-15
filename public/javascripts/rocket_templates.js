templates = {}


// * * * * * Dump of templates.actor * * * * *


templates.actor = {}


// * * * * * Dump of templates.actor.edit * * * * *


templates.actor.edit = function anonymous(locals) {
var __ = { lineno: 1, input: "h1= title\n#form_errors\nform(action=action, method='POST')\n  input(type='hidden', name='actor[_id]', value=actor._id)\n  != hidden_input(\"actor._id\", actor._id)\n  \n  != text_input(\"actor.first_name\", actor.first_name)\n  \n  != text_input(\"actor.last_name\", actor.last_name)\n    \n  input(type='submit')", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<h1>');
var __val__ = title
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 2;
buf.push('<div');
buf.push(attrs({ 'id':('form_errors') }));
buf.push('>');
__.lineno = undefined;
buf.push('</div>');
__.lineno = 4;
buf.push('<form');
buf.push(attrs({ 'action':(action), 'method':('POST') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 5;
buf.push('<input');
buf.push(attrs({ 'type':('hidden'), 'name':('actor[_id]'), 'value':(actor._id) }));
buf.push('/>');
__.lineno = 5;
var __val__ = hidden_input("actor._id", actor._id)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 7;
var __val__ = text_input("actor.first_name", actor.first_name)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 9;
var __val__ = text_input("actor.last_name", actor.last_name)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 11;
buf.push('<input');
buf.push(attrs({ 'type':('submit') }));
buf.push('/>');
buf.push('</form>');}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.actor.index * * * * *


templates.actor.index = function anonymous(locals) {
var __ = { lineno: 1, input: "- if (actors.length > 0)\n  h1 Listing Actors\n\n  #actor-list\n    ul.actors\n      - for (var i in actors)\n        li\n          != link_to(actors[i].first_name + \" \" + actors[i].last_name, {\"Actor.show\": {_id: actors[i][\"_id\"]}})\n- else\n  h1 No actors have been entered yet\n\n!= link_to(\"Create New Listing\", {\"Actor.new\": \"\"}, {class: \"button\"})", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
 if (actors.length > 0)
{
__.lineno = 2;
__.lineno = 2;
buf.push('<h1>');
buf.push('Listing Actors');
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 4;
buf.push('<div');
buf.push(attrs({ 'id':('actor-list') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 5;
buf.push('<ul');
buf.push(attrs({ "class": ('actors') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 6;
 for (var i in actors)
{
__.lineno = 7;
__.lineno = 8;
buf.push('<li>');
__.lineno = undefined;
__.lineno = 8;
var __val__ = link_to(actors[i].first_name + " " + actors[i].last_name, {"Actor.show": {_id: actors[i]["_id"]}})
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
}
buf.push('</ul>');
buf.push('</div>');
}
 else
{
__.lineno = 10;
__.lineno = 10;
buf.push('<h1>');
buf.push('No actors have been entered yet');
__.lineno = undefined;
buf.push('</h1>');
}
__.lineno = 12;
var __val__ = link_to("Create New Listing", {"Actor.new": ""}, {class: "button"})
buf.push(null == __val__ ? "" : __val__);}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.actor.show * * * * *


templates.actor.show = function anonymous(locals) {
var __ = { lineno: 1, input: "h1= actor.first_name + \" \" + actor.last_name\n\nhr\n!= link_to(\"Back to actor list\", {'Actor.index': \"\"})\n\\ \\| \n!= link_to(\"Edit\", {'Actor.edit': {id: actor._id}})\n\\ \\| \n!= link_to(\"Delete\", {\"Actor.delete\": {id: actor._id}})", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<h1>');
var __val__ = actor.first_name + " " + actor.last_name
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 4;
buf.push('<hr');
buf.push(attrs({  }));
buf.push('/>');
__.lineno = 4;
var __val__ = link_to("Back to actor list", {'Actor.index': ""})
buf.push(null == __val__ ? "" : __val__);
__.lineno = 5;
buf.push('\ \| ');
buf.push('\n');
__.lineno = 6;
var __val__ = link_to("Edit", {'Actor.edit': {id: actor._id}})
buf.push(null == __val__ ? "" : __val__);
__.lineno = 7;
buf.push('\ \| ');
buf.push('\n');
__.lineno = 8;
var __val__ = link_to("Delete", {"Actor.delete": {id: actor._id}})
buf.push(null == __val__ ? "" : __val__);}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.app * * * * *


templates.app = {}


// * * * * * Dump of templates.app.about * * * * *


templates.app.about = function anonymous(locals) {
var __ = { lineno: 1, input: "h1 About\n\np This site tells you about all the crappy movies that have been released.", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<h1>');
buf.push('About');
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 3;
buf.push('<p>');
buf.push('This site tells you about all the crappy movies that have been released.');
__.lineno = undefined;
buf.push('</p>');}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.app.form_errors * * * * *


templates.app.form_errors = function anonymous(locals) {
var __ = { lineno: 1, input: "h2 There was an error with processing your input\nul\n  - for (var k in errors)\n    li= k + \" \" + errors[k]", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<h2>');
buf.push('There was an error with processing your input');
__.lineno = undefined;
buf.push('</h2>');
__.lineno = 3;
buf.push('<ul>');
__.lineno = undefined;
__.lineno = 3;
 for (var k in errors)
{
__.lineno = 4;
__.lineno = 4;
buf.push('<li>');
var __val__ = k + " " + errors[k]
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = undefined;
buf.push('</li>');
}
buf.push('</ul>');}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.app.layout * * * * *


templates.app.layout = function anonymous(locals) {
var __ = { lineno: 1, input: "#wrapper\n  #header\n    h1 MovieList\n  .table\n    #main\n      #navigation\n        ul\n          li!= link_to(\"Movies\", {\"Movie.index\": \"\"})\n          li!= link_to(\"Actors\", {\"Actor.index\": \"\"})\n          li!= link_to(\"About\", {\"App.about\": \"\"})\n      #content\n  #footer\n    p Don't steal my stuff.", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<div');
buf.push(attrs({ 'id':('wrapper') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 2;
buf.push('<div');
buf.push(attrs({ 'id':('header') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 3;
buf.push('<h1>');
buf.push('MovieList');
__.lineno = undefined;
buf.push('</h1>');
buf.push('</div>');
__.lineno = 4;
buf.push('<div');
buf.push(attrs({ "class": ('table') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 5;
buf.push('<div');
buf.push(attrs({ 'id':('main') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 6;
buf.push('<div');
buf.push(attrs({ 'id':('navigation') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 8;
buf.push('<ul>');
__.lineno = undefined;
__.lineno = 8;
buf.push('<li>');
var __val__ = link_to("Movies", {"Movie.index": ""})
buf.push(null == __val__ ? "" : __val__);
__.lineno = undefined;
buf.push('</li>');
__.lineno = 9;
buf.push('<li>');
var __val__ = link_to("Actors", {"Actor.index": ""})
buf.push(null == __val__ ? "" : __val__);
__.lineno = undefined;
buf.push('</li>');
__.lineno = 10;
buf.push('<li>');
var __val__ = link_to("About", {"App.about": ""})
buf.push(null == __val__ ? "" : __val__);
__.lineno = undefined;
buf.push('</li>');
buf.push('</ul>');
buf.push('</div>');
__.lineno = 11;
buf.push('<div');
buf.push(attrs({ 'id':('content') }));
buf.push('>');
__.lineno = undefined;
buf.push('</div>');
buf.push('</div>');
buf.push('</div>');
__.lineno = 12;
buf.push('<div');
buf.push(attrs({ 'id':('footer') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 13;
buf.push('<p>');
buf.push('Don\'t steal my stuff.');
__.lineno = undefined;
buf.push('</p>');
buf.push('</div>');
buf.push('</div>');}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.movie * * * * *


templates.movie = {}


// * * * * * Dump of templates.movie.edit * * * * *


templates.movie.edit = function anonymous(locals) {
var __ = { lineno: 1, input: "h1= title\n#form_errors\nform(action=action, method='POST')\n  input(type='hidden', name='movie[_id]', value=movie._id)\n  != hidden_input(\"movie._id\", movie._id)\n  \n  != text_input(\"movie.name\", movie.name)\n  \n  != text_input(\"movie.year\", movie.year)\n  \n  != text_input(\"movie.stars\", movie.stars)\n  \n  != textarea_input(\"movie.description\", movie.description)\n  \n  input(type='submit')", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<h1>');
var __val__ = title
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 2;
buf.push('<div');
buf.push(attrs({ 'id':('form_errors') }));
buf.push('>');
__.lineno = undefined;
buf.push('</div>');
__.lineno = 4;
buf.push('<form');
buf.push(attrs({ 'action':(action), 'method':('POST') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 5;
buf.push('<input');
buf.push(attrs({ 'type':('hidden'), 'name':('movie[_id]'), 'value':(movie._id) }));
buf.push('/>');
__.lineno = 5;
var __val__ = hidden_input("movie._id", movie._id)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 7;
var __val__ = text_input("movie.name", movie.name)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 9;
var __val__ = text_input("movie.year", movie.year)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 11;
var __val__ = text_input("movie.stars", movie.stars)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 13;
var __val__ = textarea_input("movie.description", movie.description)
buf.push(null == __val__ ? "" : __val__);
__.lineno = 15;
buf.push('<input');
buf.push(attrs({ 'type':('submit') }));
buf.push('/>');
buf.push('</form>');}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.movie.index * * * * *


templates.movie.index = function anonymous(locals) {
var __ = { lineno: 1, input: "- if (movies.length > 0)\n  h1 Listing Movies\n\n  #movie-list\n    ul.movies\n      - for (var i in movies)\n        li\n          != link_to(movies[i].name, {\"Movie.show\": {_id: movies[i][\"_id\"]}})\n- else\n  h1 No movies have been entered yet\n\n!= link_to(\"Create New Listing\", {\"Movie.new\": \"\"}, {class: \"button\"})", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
 if (movies.length > 0)
{
__.lineno = 2;
__.lineno = 2;
buf.push('<h1>');
buf.push('Listing Movies');
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 4;
buf.push('<div');
buf.push(attrs({ 'id':('movie-list') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 5;
buf.push('<ul');
buf.push(attrs({ "class": ('movies') }));
buf.push('>');
__.lineno = undefined;
__.lineno = 6;
 for (var i in movies)
{
__.lineno = 7;
__.lineno = 8;
buf.push('<li>');
__.lineno = undefined;
__.lineno = 8;
var __val__ = link_to(movies[i].name, {"Movie.show": {_id: movies[i]["_id"]}})
buf.push(null == __val__ ? "" : __val__);
buf.push('</li>');
}
buf.push('</ul>');
buf.push('</div>');
}
 else
{
__.lineno = 10;
__.lineno = 10;
buf.push('<h1>');
buf.push('No movies have been entered yet');
__.lineno = undefined;
buf.push('</h1>');
}
__.lineno = 12;
var __val__ = link_to("Create New Listing", {"Movie.new": ""}, {class: "button"})
buf.push(null == __val__ ? "" : __val__);}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}


// * * * * * Dump of templates.movie.show * * * * *


templates.movie.show = function anonymous(locals) {
var __ = { lineno: 1, input: "h1= movie.name\nb Year:\n= movie.year\nbr\nb Stars:\n= movie.stars\n\nh2 Description\n#description!= movie.description\n\nhr\n!= link_to(\"Back to movie list\", {'Movie.index': \"\"})\n\\ \\| \n!= link_to(\"Edit\", {'Movie.edit': {id: movie._id}})\n\\ \\| \n!= link_to(\"Delete\", {\"Movie.delete\": {id: movie._id}})", filename: undefined };
function rethrow(err, str, filename, lineno){
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context); 

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno 
    + '\n' + context + '\n\n' + err.message;
  throw err;
}
try {
function attrs(obj){
  var buf = []
    , terse = obj.terse;
  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;
  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];
      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + escape(val.join(' ')) + '"');
      } else {
        buf.push(key + '="' + escape(val) + '"');
      }
    }
  }
  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
var buf = [];
with (locals || {}) {var interp;
__.lineno = 1;
__.lineno = 1;
buf.push('<h1>');
var __val__ = movie.name
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = undefined;
buf.push('</h1>');
__.lineno = 2;
buf.push('<b>');
buf.push('Year:');
__.lineno = undefined;
buf.push('</b>');
__.lineno = 3;
var __val__ = movie.year
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = 5;
buf.push('<br');
buf.push(attrs({  }));
buf.push('/>');
__.lineno = 5;
buf.push('<b>');
buf.push('Stars:');
__.lineno = undefined;
buf.push('</b>');
__.lineno = 6;
var __val__ = movie.stars
buf.push(escape(null == __val__ ? "" : __val__));
__.lineno = 8;
buf.push('<h2>');
buf.push('Description');
__.lineno = undefined;
buf.push('</h2>');
__.lineno = 9;
buf.push('<div');
buf.push(attrs({ 'id':('description') }));
buf.push('>');
var __val__ = movie.description
buf.push(null == __val__ ? "" : __val__);
__.lineno = undefined;
buf.push('</div>');
__.lineno = 12;
buf.push('<hr');
buf.push(attrs({  }));
buf.push('/>');
__.lineno = 12;
var __val__ = link_to("Back to movie list", {'Movie.index': ""})
buf.push(null == __val__ ? "" : __val__);
__.lineno = 13;
buf.push('\ \| ');
buf.push('\n');
__.lineno = 14;
var __val__ = link_to("Edit", {'Movie.edit': {id: movie._id}})
buf.push(null == __val__ ? "" : __val__);
__.lineno = 15;
buf.push('\ \| ');
buf.push('\n');
__.lineno = 16;
var __val__ = link_to("Delete", {"Movie.delete": {id: movie._id}})
buf.push(null == __val__ ? "" : __val__);}return buf.join("");
} catch (err) {
  rethrow(err, __.input, __.filename, __.lineno);
}
}