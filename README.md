![Arguo Image](https://raw.githubusercontent.com/pierzchalatomasz/Arguo-HTML5-Template/master/docs/img/arguo-promo.png)

## Arguo HTML5 Template ##
Arguo is a free HTML5 responsive website template. Built with Bootstrap, HTML5, CSS3, LESS, Gulp and Browserify.

[Demo](http://pierzchalatomasz.github.io/Arguo-HTML5-Template)

## Docs ##

**Directories**

 - Development JavaScript files are located in `./dev/js`.
 - jQuery plugins are located in `./dev/js/plugins`.
 - Development LESS files are located in `./dev/less`.

**First steps**

 1. Install node.js from http://nodejs.org.
 2. Change working directory to `./dev` inside template directory - type `cd path_to_template/dev` in command line.
 3. Type `npm install` in command line to install all dependencies.

**LESS / CSS**

 - Main stylesheet is divided into separate less files which are imported in `./dev/less/styles.less` file.
 - To compile LESS to CSS - type gulp less.
 - It will output single style.css file in `../css` directory.

**JS**

- Main JavaScript file ( `./dev/js/main.js` ) uses browserify to require modules ( located in `./dev/js` ).
- To bundle up main.js modules - type `browserify js/main.js -o ../js/main.js`. It will output single main.js file in `../js` directory.
- To minify main.js - type `gulp minify`. It will minify `../js/main.js` file.
jQuery plugins ( `./dev/js/plugins/*.js` ) are concatenated into one minified file.
- To add custom jQuery plugins paste the file into `./dev/js/plugins` directory and type gulp plugins. It will output single plugins.js file in `../js` directory.
