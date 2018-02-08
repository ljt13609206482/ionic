/**
 * Created by web-01 on 2018/2/8.
 */
//引入依赖模块
const express=require('express');
const bodyParser=require('body-parser');

//实例化一各对象
let app=new express();
//配置中间件
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
   //req:request
   // res:response
    res.end("it works...")
});
app.post('/signUp',(req,res)=>{
    //...
    //get:req.query.*
    let email=req.body.email;
    let username=req.body.username;
    let password=req.body.password;

    res.end(`email:${email}`)
})

//设置服务器端口号
app.listen(3000);