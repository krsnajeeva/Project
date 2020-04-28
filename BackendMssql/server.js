var express = require('express');
var app = express();
var port = process.env.port || 1337;

var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
// create application/json parser
app.use(bodyParser.json());

app.use(function(req, res, next) {
    // var allowedOrigins = ['http://localhost:4200'];
    // var origin = req.headers.origin;
    // if(allowedOrigins.indexOf(origin) > -1){
    //      res.setHeader('Access-Control-Allow-Origin', origin);
    // }
    // // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    // res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // res.header('Access-Control-Allow-Credentials', true);
    // return next();

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });
  
var productController = require('./Controller/ProductControllerGet')();
var productControllerpost = require('./Controller/ProductControllerPost')();
var productControllerput = require('./Controller/ProductControllerPut')();
var productControllerdelete = require('./Controller/ProductControllerDelete')();
var productControllergetall = require('./Controller/ProductControllerGetapi')();
var ProductControllergetone = require('./Controller/ProductControllerGetone')();
var ProductControllerGetLastID = require('./Controller/ProductControllerGetLastID')();
var ProductControllerGetLog = require('./Controller/ProductControllerGetLog')();
var ProductControllerCreateLog = require('./Controller/ProductControllerCreateLog')();

// app.get("/product",function(request,response)
// {
//     response.json({"Message":"Welcome to Node js"});
// });
app.use("/api/name",productController)

app.use("/api/name/id",ProductControllerGetLastID)

app.use("/api/name/log",ProductControllerGetLog)

app.use("/api/name/all",productControllergetall)

app.use("/api/name/post",productControllerpost)

app.use("/api/name/post/id",productControllerput)

app.use("/api/name/delete/id",productControllerdelete)

app.use("/api/name/one/id",ProductControllergetone)

app.use("/api/name/createlog",ProductControllerCreateLog)

app.listen(port, function () {
    var datetime = new Date();
    var message = "Server runnning on Port:- " + port + "Started at :- " + datetime;
    console.log(message);
});