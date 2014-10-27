/*!
Copyright 2014 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

// Declare dependencies
/* global require, __dirname */

var util = require("util"),
    connect = require("kettle/node_modules/express/node_modules/connect"),
    port = 8888;

connect.createServer(connect["static"](__dirname)).listen(port);
util.puts("Preferences Management Tool server running...");
util.puts("Visit http://localhost:" + port + "/demos/prefsEditor/index.html");
