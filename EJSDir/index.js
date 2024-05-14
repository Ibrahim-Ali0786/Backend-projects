const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
app.set("view engine","ejs");
app.set('views',path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
// app.get("/",(req,res)=>
// {
//     res.render('home.ejs');
// });

// app.get("/home",(req,res)=>
// {
//     res.send("hello world");
// });
// app.get('/rolldice',(req,res)=>{
//     let diceValue = Math.floor(Math.random()*6)+1;
//     res.render('RollDice',{diceValue});
// });
// // {diceValue} this means {diceValue:diceValue}

app.get('/ig/:username',(req,res)=>{
    let {username} = req.params;
    const instaData=require('./data.json');
    const data = instaData[username];
    if(data)
    {
        res.render('insta.ejs',{data});
    }
    else
    {
        res.render('error.ejs');
    }
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
app.get('/port',(req,res)=>{
    res.render('portfolio');
})
