const express = require('express');
const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port,()=>{
    console.log(`Listening on port : ${port}`);
});
app.get('/register',(req,res)=>{
    let {user,pass} = req.query;
    res.send(`This is a get response! Welcome ${user}`);
});
app.post('/register',(req,res)=>{
    let {user,pass} = req.body;
    res.send(`This is a post response! Welcome ${user}`);
});