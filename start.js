var util = require('util'),
    connect = require('kettle/node_modules/express/node_modules/connect'),
    port = 8888;

connect.createServer(connect.static(__dirname)).listen(port);
util.puts('Preferences Management Tool server running...');
util.puts('Visit http://localhost:8888/demos/prefsEditor/index.html');
