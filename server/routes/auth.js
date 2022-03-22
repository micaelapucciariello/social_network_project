const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hello world");
})

router.post("/singup", (req, res)=>{
    const{name,email,password} = req.body
    if(!email || !password || !name){
        res.status(422).json({error: "missing data"});
    }
    res.json({message: "data saved"});
});

module.exports = router