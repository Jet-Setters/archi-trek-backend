'use strict';

//----------------------Dependencies-------------------------
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');



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
});

// TODO: Add a key and the proper variables for key and the search query
app.get('/location', (rec, res) => {
  const API = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${searchQuery}&format=json`;
  const locationRes = await axios.get(API);
  console.log('LocationIQ Data: ', locationRes);
});


// Default route
app.get('/*', (req, res) => {
  res.status(404).send('Route not found');
});


//--------------------Listening-------------------------------
app.listen(PORT, () => {
  console.log(`Server listening on ${ PORT }`);
});