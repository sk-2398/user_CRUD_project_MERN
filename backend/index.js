const express = require("express");
const cors = require('cors');
// const { query, validationResult } = require('express-validator');
const mysql = require("mysql")
const app = express();
app.use(cors());
app.use(express.json())
// app.use(bodyParser.urlencoded({extended:true}))

// connecting to database
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'User',
});
if (pool) {
  console.log("Connected to databaase")
}

//  Create the users table if it doesn't exist
// const createTable = `CREATE TABLE IF NOT EXISTS users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL UNIQUE,
//   phone VARCHAR(20) NOT NULL UNIQUE
// )`;
// pool.query(createTable, (err) => {
//   if (err) throw err;
//   console.log('Users table created');
// });


// Create a new user
app.post('/adduser', (req, res) => {
  {

    const { name, email, phone } = req.body;
    const sql = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';
    pool.query(sql, [name, email, phone], (err, result) => {
      if (err)  throw err;
      res.send('User created successfully');
    });
  }
 (error) 
});

// Read all users
app.get('/users', (req, res) => {
  

    const sql = 'SELECT * FROM users';
    pool.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  
});

// Update a user
app.put('/updateuser/:id', (req, res) => {
  

    const { name, email, phone } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?';
    pool.query(sql, [name, email, phone, id], (err, result) => {
      if (err)  throw err;
      res.send('User updated successfully');
    });
  
});

// get a user
app.get('/user/:id', (req, res) => {
  
    
    const { id } = req.params;
    const sql = 'SELECT * FROM users WHERE id = ?';
    pool.query(sql, [id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  
});
// Delete a user
app.delete('/deleteuser/:id', (req, res) => {
  

    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    pool.query(sql, [id], (err, result) => {
      if (err)  throw err;
      res.send('User deleted successfully');
    });
  
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
})