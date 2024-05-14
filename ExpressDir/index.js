const express = require('express');
const app = express();
let port = 3000;
app.listen(port,()=>{console.log(`app is listening on port ${port}`)});
// app.use((req,res)=>{
//     // console.log(req);
//     console.log('request recieved');
//     res.send({
//         name:'apple',
//         color:'red'
//     });
// });
app.get('/',(req,res)=>{
    res.send('this is a home page')
});
// app.get('/contact',(req,res)=>{
//     res.send('this is a contact page')
// });
// app.get('/help',(req,res)=>{
//     res.send('this is a help page')
// });
// app.get('/do',(req,res)=>{
//     res.send('this is a do page')
// });
// app.get('*',(req,res)=>{
//     res.send('this is good boy')
// });
app.get('/search',(req,res)=>{
    let {q} = req.query;
    if(!q)
    {
        res.send(`nothing is searched`);
    }
    res.send(`this is a ${q}`);
})
