const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const request = require('request');
const Joi = require('Joi');
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  next();
});

//example post request
router.post('/api/locations', (req, res) => {
  // console.log(req);
  const location = req.body.location;
  console.log(location);
  //const schema = {'restaurant': Joi.string().min(3).required()}

  const url = 'https://api.foursquare.com/v2/venues/explore?client_secret=CGPC3IXSATYISKB2MKQRJSB40OX3JC1NGH2JWEPISSOI1VHV&client_id=KUQDWHVZC5SVE5HWPUWKPXD0FXDCX4W1V10BIYUQ3HJF40DB&v=20200419&near=' + location + '&categoryId=4d4b7105d754a06374d81259';
  res.send(url);
  console.log("ROUTER POST");
});

// GET request that we use from our explore page
router.get('/api/location', (req, res) => {
  const url = 'https://api.foursquare.com/v2/venues/explore?client_secret=CGPC3IXSATYISKB2MKQRJSB40OX3JC1NGH2JWEPISSOI1VHV&client_id=KUQDWHVZC5SVE5HWPUWKPXD0FXDCX4W1V10BIYUQ3HJF40DB&v=20200419&near=South_Bend,In&categoryId=4d4b7105d754a06374d81259';
  fetch(url)
    .then(
        response => response.text()
    ).then(
        html => res.send(html)
    );
});
module.exports = router;
