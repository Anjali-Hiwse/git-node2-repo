var express=require("express");
var customerRouter=require("./Customer");
var config=require("config");

var port= parseInt(config.get("port"));
var app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use("/Customer",customerRouter);

app.listen(port, ()=>{
    console.log("Server started at port 6600 ....");
});