const express = require('express');
const bodyparser = require('body-parser');
// const db = require('./db');


const app = express();
app.use(bodyparser.json()); 


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.post("/register",(req,res)=>{
   console.log(req.body);
   res.status(200).json({message:"Done"});
});

app.post("/login",(req,res)=>{
    console.log("Login Backend")
    console.log(req.body);
    res.status(200).json({message:"Logged In"});
})

module.exports = app;