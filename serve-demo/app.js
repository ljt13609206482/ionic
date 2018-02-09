/**
 * Created by web-01 on 2018/2/8.
 */
//引入依赖模块
const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');

//创建连接池,并配置参数
let pool=mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    database:"db",
    user:"root",
    password:"",
    connectionLimit:10
})

//实例化一各对象
let app=new express();
//配置中间件,解析post请求信息
//app.use(bodyParser.urlencoded({extended:true}));
//配置中间件，可接收json格式的请求参数
app.use(bodyParser.json());

app.get('/',(req,res)=>{
   //req:request
   // res:response
    res.end("it works...")
});

app.post('/signUp',(req,res)=>{
    //...
    //get:req.query.*
    let user=req.body.user;
    //检查用户人的email是否已经存在
    let sql='SELECT * FROM db.user WHERE email=?';
    pool.query(sql,[user.email],(err,results)=>{
        if(err){throw err}
        else if(results.length===1){
            res.send('{"status":"exist"}')
        }
    });
    //创建sql语句
    sql='INSERT INTO db.user VALUE(NULL,?,?,?,?,?,?)';
    //租一个连接,发送sql语句
    //pool.getConnection((err,connection)=>{
    //    if(err){
    //        throw err;
    //    }else{
    //        connection.query((err,result)=>{})
    //    }
    //})
    pool.query(sql,[user.email,user.username,user.password,user.gender,user.age,user.city],(err,result,fields)=>{
        //...
        if(err){
            throw err
        }else if(result.affectedRows===1){
            //sign up success
            res.send('{"state":"ok"}')
        }else{
            //sign up failed
            res.send('{"state":"err"}')
        }
    })

});


//设置服务器端口号
app.listen(3000);