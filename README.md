# webpack-demo
Demonstrates building web app using webpack.

## Setup
### Installation
Install npm and nodejs and any editor. For this demo we will use Atom editor. npm will come installed along with nodejs, so just download latest version of [node.js](https://docs.npmjs.com/getting-started/installing-node)

Verify installation - check if you can run the commands:
```
npm -v
node -v

```

Create a directory webpack-demo under your working directory.
```
mkdir webpack-demo
cd webpack-demo
npm init --yes
```
The npm init command will create a package.json under webpack-demo directory. Open Atom and add project directory. You will see the content of the package.json as 
```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

### Demo 1
Lets create a very simple web page that will add some text to div tag though javascript. You may skip and go to Demo 2 if you get bored!.

#### create simple index.html and index.js 
```html
<!DOCTYPE html>
<html>
<head>
    <title>webpack Demo</title>
</head>
<body>
<div id="app"> </div>
<script src="index.js"></script>

</body>
</html>
```
```javascript
var app = document.querySelector("#app");
app.innerHTML = "WebPack demonstration";

```

#### Run Demo1
open index.html and you should see text "webPack demonstration" in the browser.


### Demo 2
Now lets try to add some webpack stuff...



