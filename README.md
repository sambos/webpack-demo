# webpack-demo
Demonstrates building web app using webpack.   
* Demo 1
* Demo 2
* Demo 3 - with webpack-dev-server



## Setup
## Installation
Install npm and nodejs and any editor. For this demo we will use Atom editor. npm will come installed along with nodejs, so just download latest version of [node.js](https://docs.npmjs.com/getting-started/installing-node)

Verify installation - check if you can run the commands:
```sh
npm -v
node -v

```

Create a directory webpack-demo under your working directory.
```sh
mkdir webpack-demo
cd webpack-demo
npm init --yes
```
The npm init command will create a package.json under webpack-demo directory. Open Atom and add project directory. You will see the content of the package.json as 

***package.json***
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
*index.html*
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

*index.js*
```javascript
var app = document.querySelector("#app");
app.innerHTML = "WebPack demonstration";

```

#### Run Demo1
open index.html and you should see text "webPack demonstration" in the browser.


### Demo 2
Now lets try to add some webpack stuff... Lets install webpack package using npm :
```
npm install webpack --save-dev (--save-dev will save as dev dependency in package.json)
```
This will add webpack dependency under package.json and also create node_modules directory - only needed at build time. Now configure webpack by creating a file named 'wepack.config.js': (this will output the contents to bundle.js - which will need to be included in html instead of index.js)

*webpack.config.js*
```javascript
module.exports = {
  entry: "./index.js",
  output: {
    path: ".",
    filename: "bundle.js"
  }
};
```

To run demo 2, we will also need to instruct to add the build script in package.json. update package.json content as :

*package.json*
```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Now run the command to build the bundle.js which can be included in our index.js file.
```shell
npm run build
```

Lets also install the markdown package called 'marked' and use it in our index.js to use markdown styling.
```
npm install marked --save
```
update index.js to use marked package

*index.js*
```javascript
var marked = require("marked");
var app = document.querySelector("#app");
app.innerHTML = marked("# WebPack demonstration");
```

update index.html to point to bundle.js as 

```
<script src="bundle.js"></script>
```

#### Running Demo 2
open the browser to point to index.html and you will see the results !!


### Demo 3
Now lets try to run the same example with webpack dev server where all the changes made to .css will automatically be built and published for us - whenever any file is updated !! - we will reuse the files created in the Demo 2.

Lets add style.css file and add it to index.js

*index.html*
same as above in Demo 2

*index.js*
```javascript
var marked = require("marked");
require("./style.css");
var app = document.querySelector("#app");
app.innerHTML = marked("# WebPack demonstration");

```
-- notice that, you dont have to include css in html file, require will automatically make that as dependency.

*style.css*
```css
body{
  color: #DDBBCC;
}

```

Now lets see how this style changes will automatically apply. First install webpack-dev-server module
```sh
npm install webpack-dev-server --save-dev
```

Install css module loaders. lets create a new webpack.config-dev.js file which will import webpack.config.js as well. You can chagne the port to any open port that you like. __dirname is the short form of current directory.

config.devtool = "eval" implies => 

*webpack.config-dev.js*
```javascript
var config = require("./webpack.config.js");

config.devServer = {
  port: 3050,
  contentBase: __dirname,
  inline: true
};
config.output.publicPath = "/";
config.devtool = "eval";

module.exports = config;
```

update webpack.config.js to include css loaders 

*webpack.config.js*
```javascript
module.exports = {
  entry: "./index.js",
  output: {
    path: ".",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }]
  }
};
```

Now install style-loader and css-loader modules which will install required packages.

```sh
npm install style-loader css-loader --save-dev
```

#### Running Demo 3

run the following command

```sh
npm run start-dev
```

open the browser to point to http://localhost:3050   
Now any changes that you make to css will automatically be updated.


