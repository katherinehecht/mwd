//import nodeFoursquare from 'node-foursquare';
const express = require('express');
const config = {
  'secrets' : {
    'clientId' : 'KUQDWHVZC5SVE5HWPUWKPXD0FXDCX4W1V10BIYUQ3HJF40DB',
    'clientSecret' : 'MMHS1CW43PKDCVDCN2R3WXBQC20N54MDFPOH2YFN5SPMOTGC',
    'redirectUrl' : 'https://bender.com'
  }
}

//const Foursquare = nodeFoursquare(config);
const app = express();
const httpServer = require('http')
  .createServer(app);

const port = 3000;

httpServer.listen(port, function(){
  console.log("API running on port" + port + '.');
});


/*
app.get('/', (req: express$Request, res: express$Response) => {
  const url = Foursquare.getAuthClientRedirectUrl();
  res.writeHead(303, { location: url });
  res.end();
});

app.get('/callback', (req: express$Request, res: express$Response) => {
  const code = ((req.query.code: any): string);

  Foursquare.getAccessToken(
    {
      code,
    },
    (error: ?Error, accessToken: ?string) => {
      if (error) {
        res.send(`An error was thrown: ${error.message}`);
      } else if (!accessToken) {
        res.send(`No access token was provided`);
      } else {
        // Save access token and continue.
      }
    }
  );
});*/
