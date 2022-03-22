const express = require('express');
const mongoose = require('mongoose');
const PORT = 5000;
const {MONGOURI} = require('./valuekeys');


const app = express()

const customMiddleWare = (req, res, next) =>{
    console.log("This is a middleware");
    next() //stops execution
}

app.get("/", function(req, res){
    res.send("config");
});

app.get("/home", customMiddleWare, function(req, res){
    res.send("config home");
});

app.listen(PORT, ()=>{
    console.log("server running at port: " + PORT);
})