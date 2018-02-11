/**
 * Created by web-01 on 2018/2/9.
 */

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

let pool = mysql.createPool({
  user: 'root'
});

let app = new express();

// Express 中间件 middleware 的配置
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/signUp', (req, res) => {
  let user = req.body.user;

  // todo check email
  let sql = 'SELECT * FROM db.user WHERE email = ?';
  pool.query(sql, [user.email], (err, results) => {
    if (results.length === 1) {
      res.send({"status":"exist"});
    }
  });

  sql = 'INSERT INTO db.user VALUE(NULL, ?, ?, ?, ?, ?, ?)';

  pool.query(sql, [
    user.email,
    user.username,
    user.password,
    user.gender,
    user.age,
    user.city
  ], (err, results) => {
    if (err) throw err;
    if (results.affectedRows === 1) {
      // sign up success
res.send({"status": "ok"});
} else {
  // sign up failed
  res.send({"status": "err"});
}
});
});

app.post('/signIn',(req,res)=> {
  let user = req.body.user;
  //console.log(`user:`, user);
  let sql = 'SELECT * FROM db.user WHERE email=? AND  password=?';
  pool.query(sql, [user.email, user.password], (err, results)=> {
    if (err) {
      throw err
    }
    if (results.length === 1) {
      // sign in successful
      res.send({"status": "ok"});
    } else {
      // sign in failed
      res.send({"status": "err"});
    }
  });
});

app.get('/product/:page',(req,res)=>{
  //获取前端通过地址传递的参数page
  let page=req.params.page;
  const pageSize=20;
  let sql='SELECT title FROM db.product LIMIT ? OFFSET ?';
  pool.query(sql,[pageSize,(page-1)],(err,result)=>{
    if(err){throw err};

  })
});

app.listen(3000);