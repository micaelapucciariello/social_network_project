const express = require('express');
const PORT = 5000;

const app = express()

app.get("/", function(req, res){
    res.send("config");
});

app.listen(PORT, ()=>{
    console.log("server running at port: " + PORT);
})