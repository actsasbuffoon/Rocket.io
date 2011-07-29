var link_to = function(text, args, attrs) {
  attrs = attrs || {}
  if (attrs.tag_type) {
    tag_type = attrs.tag_type
    delete(attrs.tag_type)
  }
  else {
    tag_type = "a"
  }
  attrs.href = attrs.href || "#"
  attrs.onclick = args.onclick || "rocket(" + JSON.stringify(args) + ")"
  t = []
  for (var k in attrs) {
    t.push(k + "='" + attrs[k].replace("'", "\\'") + "'")
  }
  str = "<" + tag_type + " " + t.join(" ") + ">" + text + "</" + tag_type + ">"
  return str
}