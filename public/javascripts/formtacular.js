var text_input = function(vr, vl) {
  if (vl == undefined) {vl = ""}
  parts = vr.split(".")
  label_text = parts[parts.length - 1]
  name = parts[0] + "[" + parts.slice(1, parts.length).join("][") + "]"
  id = vr.replace(/\./m, "_").replace(/__+/m, "_")
  return "<div class='field'><label for='"+id+"'>" + label_text + "</label><input type='text' name='"+name+"' id='"+id+"' value='"+vl+"' /></div>"
}

var hidden_input = function(vr, vl) {
  if (vl == undefined) {vl = ""}
  parts = vr.split(".")
  name = parts[0] + "[" + parts.slice(1, parts.length).join("][") + "]"
  id = vr.replace(/\./m, "_").replace(/__+/m, "_")
  return "<input type='hidden' name='"+name+"' id='"+id+"' value='"+vl+"' />"
}

var textarea_input = function(vr, vl) {
  if (vl == undefined) {vl = ""}
  parts = vr.split(".")
  label_text = parts[parts.length - 1]
  name = parts[0] + "[" + parts.slice(1, parts.length).join("][") + "]"
  id = vr.replace(/\./m, "_").replace(/__+/m, "_")
  return "<div class='field'><label for='"+id+"'>" + label_text + "</label><textarea name='"+name+"' id='"+id+"' >"+vl+"</textarea></div>"
}