/*!
Copyright 2014 Astea

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/GPII/prefsEditors/LICENSE.txt
*/

// Declare dependencies
/* global require, __dirname */

var net = require('net'); 
var async = require('async');
var Socket = net.Socket; 
var kettlePath = process.argv[2];
var host = process.argv[3];
var startPort = process.argv[4];
var endPort = process.argv[5];

var endingCondition = function(error, port) {
    if (error) 
        console.log(error);
    else
        startServer(port);
}

findPort(endingCondition);

function startServer(port) {
    var connect = require(kettlePath);
    var browser = require('openurl'); // You should install openurl module. The command is: npm install openurl

    connect.createServer(connect["static"](__dirname)).listen(port);
    console.log("Preferences Management Tool server running...");
    console.log("Visit http://localhost:" + port + "/demos/prefsEditor/index.html");
    browser.open("http://localhost:" + port + "/demos/prefsEditor/index.html");
}

function findPort (callback) {
    var foundPort = false;
    port = startPort;

    async.whilst(
            function() {
                return !foundPort;
            }, 
            function(callback) {
                checkPort(port, function(error, status) {
                    if (status === 'closed') {
                        foundPort = true;
                        callback(error);
                    }
                    else {
                        port++;
                        callback(null);
                    }
                });
            }, 
            function(error) {
                if (error)
                    callback(error, port);
                else if (foundPort)
                    callback(null, port);
                else
                    callback(null, false);
            }
    );
}

function checkPort (port, callback) {
    var timeout = 1000;
    var s = new Socket(), status = null, error = null;

    s.on('connect', function() {
        status = 'open';
        s.destroy();
    });
    s.setTimeout(timeout)
    s.on('timeout', function() {
        status = 'closed';
        error = new Error('Timeout for port ' + port);
        s.destroy();
    });
    s.on('error', function(ex) {
        error = ex;
        status = 'closed';
    });
    s.on('close', function(ex) {
        callback(null, status);
    });
    s.connect(port, host);
}
