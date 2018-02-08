/**
 * Created by web-01 on 2018/2/8.
 */
const express=require('express');
let app=new express();
app.get('/',(req,res)=>{
   //req:request
   // res:response
    res.end("it works...")
});
app.get('/signUp',(req,res)=>{
    //...
    let email=req.query.email;
    res.end(`email:${email}`)
})

//设置服务器端口号
app.listen(3000);