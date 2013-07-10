var sys = require("sys");
var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var querystring = require("querystring");
var exec = require("child_process").exec;

var PORT = 8080;
var INDEX_PATH = "./index.html";
var SCRIPT_PATH = "/script.js";


var sendFile = function (fileName, response) {
    console.log("request for " + fileName);
    
    var content = fs.readFileSync(fileName)
    
    if (fileName.indexOf(".png") === fileName.length - 4) {
        response.writeHead(200, {'Content-Type': 'image/png' });
        response.write(content, 'binary');
    }
    else {
        response.writeHead(200);
        response.write(content.toString(), "binary");  
    }
    
    response.end();
};


var onRequest = function (request, response) {  
    switch(request.url) {
    case '/':
        var content = fs.readFileSync(INDEX_PATH).toString();
        response.writeHead(200);
        response.write(content, "binary");  
        response.end(); 
        break;

    case '/pcp/update':
    console.log("\n\non update received:");
        if (request.method == 'POST') {
            var fullBody = "";

            request.on('data', function(chunk) {
                fullBody += chunk.toString();
            });

            request.on('end', function() {
                console.log("raw: " + fullBody);
                var decodedBody = querystring.parse(fullBody);
                console.log("decoded:\n" + JSON.stringify(decodedBody, null, 4) + "\n");

                response.writeHead(204); // no response (refresh) message
                response.end();
            });

        } else {
            response.writeHead(204);
            response.end();
        }
        break;
        
    case SCRIPT_PATH:
        var content = fs.readFileSync("." + SCRIPT_PATH).toString();
        response.writeHead(200);
        response.write(content, "binary");  
        response.end(); 
        break;

    default:
        var path = "." + request.url;

        if(fs.existsSync(path))
            sendFile(path, response);
        else {
            var ind = path.indexOf("?_=");
            if (ind !== -1) {
                path = path.substring(0, ind);
                sendFile(path, response);
            } else {
                response.writeHead(404, request.url + ": Not found", {'Content-Type': 'text/html'});
                response.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
                console.log("[404] " + request.method + " to " + request.url);
            }
        }
    };   
};

http.createServer(onRequest).listen(PORT);
console.log("test server running on port %d", PORT);
