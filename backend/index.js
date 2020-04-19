//import nodeFoursquare from 'node-foursquare';
const express = require('express');
const fetch = require('node-fetch');
//var foursquare = require('node-foursquare-venues')('KUQDWHVZC5SVE5HWPUWKPXD0FXDCX4W1V10BIYUQ3HJF40DB', 'MMHS1CW43PKDCVDCN2R3WXBQC20N54MDFPOH2YFN5SPMOTGC');
var callback;// response
//const Foursquare = nodeFoursquare(config);

const app = express();
const httpServer = require('http')
  .createServer(app);

const port = 3000;

httpServer.listen(port, function(){
  console.log("API running on port" + port + '.');
});

app.get('/callback', (req, res) => {
  const url = 'https://api.foursquare.com/v2/venues/categories?client_secret=MMHS1CW43PKDCVDCN2R3WXBQC20N54MDFPOH2YFN5SPMOTGC&client_id=KUQDWHVZC5SVE5HWPUWKPXD0FXDCX4W1V10BIYUQ3HJF40DB&v=20200419';
  fetch(url)
    .then(
        response => response.text() // .json(), etc.
        // same as function(response) {return response.text();}
    ).then(
        html => res.send(html)
    );
});
