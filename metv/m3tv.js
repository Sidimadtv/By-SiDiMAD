//Requires
const express = require("express");
const cors = require('cors');
var fs = require("fs");
var loaded = 'misc/loaded.txt';


//creates server  
const app = express();
var http = require('http').createServer(app);

var port = process.env.PORT || 8000;
var host = process.env.HOST || '0.0.0.0';

app.options('*', cors()); 
app.use(cors());


app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
 
   next();

  });


// serve your css as static
app.use(express.static(__dirname));

//launches server
http.listen(port, host, function() {
    console.log("Application started and Listening on host:" + host + " port:" + port);
    fs.readFile(loaded, 'utf8', (err, data) => {console.log('\x1b[36m%s\x1b[0m', data);console.log("LOADED\n");});

  });
  
  

//Thank you for being interested in my project!
