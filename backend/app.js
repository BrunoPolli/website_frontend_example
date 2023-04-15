const { v4: uuidv4 } = require('uuid');
const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
const fs = require('fs').promises;
const port = 3000;
const { createConnection } = require('../db/createConnection.js');
const path = require('path');

app.use(express.json())
app.use(cors({origin: "*"}))

app.post('/getUser', async (req, res) => {
  const {email, password} = req.body.data
  const con = await createConnection()
  
  con.connect(function(err) {
    if (err) throw err;
    
    var sql = "SELECT * FROM users WHERE email = ? AND password = ?"
    
    con.query(sql, [email, password], function (err, result) {
      if (err) throw err;
      
      const data = result[0];
      console.log("Data: ", data);

      if(result.length > 0){
        console.log("Data recovered: ", result)
        res.status = 200
        res.json({'recovered': true, 'message':'Found!', 'data': {'name': data.Name, 'email': data.Email}})
      }else{
        console.log("Empty data!")
        res.status = 404
        res.json({'recovered': false, 'message':'Not found!'})
      }

      con.end()
    });
  });
})

app.post('/create', async (req, res) => {
  const {name, email, password} = req.body.data
  
  console.log("Name: ", name)
  console.log("Email: ", email)
  console.log("Password: ", password)

  const con = await createConnection();

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (name, email, password) VALUES ?";
    var values = [
      [name, email, password]
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);

      res.statusCode = 201
      res.json({'created': true, 'message':'Data created!'})
      con.end()
      
    });
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
