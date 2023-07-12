# User data saving full-stack application using Node, ReactJs, and MySQL database

## Description
This repository will help you to create a full-stack user data-saving application. 
(Note: Make sure you have MySQL and Xammp server installed)

## Instructions

1) Clone this repository
2) Open the terminal in the root folder of this repository and run
  ```
   npm install
  ```
   will install node-modules
4) Create a Mysql database and add your DB credentials in the index.js file located in the backend folder.
5) Then add the following code in same file to create user table in database or you can create it manually using workbench or phpadmin
   ```
     const createTable = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL UNIQUE,
     phone VARCHAR(20) NOT NULL UNIQUE
   )`;
   pool.query(createTable, (err) => {
     if (err) throw err;
     console.log('Users table created');
   });
   ```
   
6) Open the terminal in backend folder and run
```
nodemon index.js
```
will run the backend and connect with the database.

6) Open the terminal in the root folder of this project and run
   ```
   npm start
   ```
   will start a project on the localhost http://localhost:3000/.
