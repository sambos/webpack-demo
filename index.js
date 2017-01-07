var marked = require("marked");
require("./style.css");
var app = document.querySelector("#app");
app.innerHTML = marked("# WebPack demonstration");
