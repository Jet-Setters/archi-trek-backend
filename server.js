'use strict';

//----------------------Dependencies-------------------------
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');



//--------------------Configurations--------------------------
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3002;


//---------------------Routes---------------------------------
// Root route
app.get('/', (req, res) => {
  res.send('This is the root route');
})


// Default route
app.get('/*', (req, res) => {
  res.status(404).send('Route not found');
})


//--------------------Listening-------------------------------
app.listen(PORT, () => {
  console.log(`Server listening on ${ PORT }`);
});