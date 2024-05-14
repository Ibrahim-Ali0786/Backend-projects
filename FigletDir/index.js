const figlet = require('figlet');
figlet('IbrahimAli',(err,data)=>
{
 if(err)
 {
    console.log('something went wrong ');
    console.log(err);
 }
 else
 {
    console.log(data);
 }
}
);