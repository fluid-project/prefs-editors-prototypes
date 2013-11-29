var appjs = require("appjs");

appjs.serveFilesFrom(__dirname + "/content");

var userToken = process.argv[2];

// create a window
var window = appjs.createWindow({
    width: 0,
    height: 0,
    alpha: true,
    showChrome: true,
    autoResize: true
});


appjs.router.post("/pcp/update", function(request, response, next){
    console.log(require("querystring").parse(request.post));

    //redirect the http request to the gpii local server (localhost:8081)
    var newPreferences = JSON.stringify(require("querystring").parse(request.post), null, 4);
    var res = require("http").request({
        hostname: "localhost",
        port: 8081,
        path: "/pcp/update",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": newPreferences.length
        }
    }, function () {});
    res.on("error", function(error) {
        console.log(error);
    });
    res.write(newPreferences);
    res.end();

    response.send(204);
});

// prepare the window when first created
window.on("create", function(){
    // window.frame controls the desktop window
    window.frame.show().center();
    //window.frame.openDevTools();
});

// the window is ready when the DOM is loaded
window.on("ready", function(){
    // directly interact with the DOM

    window.process = process;
    window.module = module;

    window.addEventListener('keydown', function(e){
        if (e.keyIdentifier === 'F12') {
            window.frame.openDevTools();
        }
    });
});

// cleanup code when window is closed
window.on("close", function(){
    console.log("Window Closed");
});
