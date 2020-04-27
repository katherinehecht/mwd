const express = require('express');
const router = express();
const request = require('request');
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();

});
/*
router.post('/', (req, res) => {
  const schema = {
    'restaurant': {
      'name':
      'address':
    }
  }
});*/
/*
router.get('/callback', (req, res) => {
  const url = 'https://api.foursquare.com/v2/venues/explore?client_secret=MMHS1CW43PKDCVDCN2R3WXBQC20N54MDFPOH2YFN5SPMOTGC&client_id=KUQDWHVZC5SVE5HWPUWKPXD0FXDCX4W1V10BIYUQ3HJF40DB&v=20200419&near=South_Bend,In&categoryId=4d4b7105d754a06374d81259';
  fetch(url)
    .then(
        response => response.text()
    ).then(
        html => res.send(html)
    );
});
*/

request(
  {
    url: 'https://api.foursquare.com/v2/venues/explore',
    method: 'GET',
    qs: {
      client_id: 'KUQDWHVZC5SVE5HWPUWKPXD0FXDCX4W1V10BIYUQ3HJF40DB',
      client_secret: 'MMHS1CW43PKDCVDCN2R3WXBQC20N54MDFPOH2YFN5SPMOTGC',
      ll: '40.7243,-74.0018',
      v: '20200419',
      near: 'South_Bend,IN',
      category: '4d4b7105d754a06374d81259',
    },
  },
  function(err, res, body) {
    if (err) {
      console.error(err);
    } else {
      console.log(body);
    }
  }
);
