/*!
Copyright 2014 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

// Declare dependencies
/* global require, __dirname */

var kettlePath = process.argv[2];
var host = process.argv[3];
var port = process.argv[4];

/*
 * Example starting PMT: node start.js ../kettle/node_modules/express/node_modules/connect localhost 5559
 */

function startServer(port) {
    var connect = require(kettlePath);
    var browser = require('openurl');

    connect.createServer(connect["static"](__dirname)).listen(port);
    console.log("Preferences Management Tool server running...");
    console.log("Visit http://"+ host + ":" + port + "/demos/prefsEditor/index.html");
    browser.open("http://"+ host + ":" + port + "/demos/prefsEditor/index.html");
}

startServer(port);