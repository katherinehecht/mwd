const express = require('express');
const fetch = require('node-fetch');
var callback;// response

const app = express();
const httpServer = require('http')
  .createServer(app);

const port = process.env.PORT || 3000;

httpServer.listen(port, function(){
  console.log("API running on port" + port + '.');
});

app.get('/callback', (req, res) => {
  const url = 'https://api.foursquare.com/v2/venues/explore?client_secret=MMHS1CW43PKDCVDCN2R3WXBQC20N54MDFPOH2YFN5SPMOTGC&client_id=KUQDWHVZC5SVE5HWPUWKPXD0FXDCX4W1V10BIYUQ3HJF40DB&v=20200419&near=South_Bend,In&categoryId=4d4b7105d754a06374d81259';
  fetch(url)
    .then(
        response => response.text()
    ).then(
        html => res.send(html)
    );
});
