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

app.listen(3000);