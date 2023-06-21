import { Request, Response } from 'express';
var express = require('express');
var reflectMetadata = require('reflect-metadata');
var {Employee} = require('./Entities/Employee');


const app = express()
const PORT = 8000


const router = require('./routes')
app.use(express.json())
app.use("/api", router)



// Create database connection and start server
const { createConnection } = require('typeorm');
createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'employee',
  entities: [Employee],
  synchronize: true,
  logging: true
})
  .then(() => {
    app.listen(PORT, (): void => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.log('Error connecting to database', error);
  });