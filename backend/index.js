const express = require('express');
const fetch = require('node-fetch');
const locations = require('./routes/locations.js');

// instantiate express
const app = express();
app.use('/',locations);

// create new server instance
const httpServer = require('http')
  .createServer(app);

// register user-generated routes
const port = process.env.PORT || 3000;

// listen on server
httpServer.listen(port, () =>{
  console.log("API running on port" + port + '.');
});

/* base route
app.get('/', (req, res)=>{
  res.status(200).send('I dream of being a website');
});*/
