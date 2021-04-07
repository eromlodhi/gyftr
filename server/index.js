const path=require('path');
const fs=require('fs');
var request = require('request');
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import RootContainer from '../components/container/RootContainer';

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
app.use(express.json());

/*default URL to API*/
app.use('^/$', (req, res, next) => {
    const app = ReactDOMServer.renderToString(<RootContainer />);
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });

  app.use('/getCategories', function (req, res) {
  
    request.get({ url: "https://api.gyftr.net/smartbuyapi/smartbuyapi/hdfc/api/v1/home/categories" }, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("data is::"+res.json(body));
          return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${res.json(body)}</div>`)
          );
         }
     });
    res.send('Backend api works');
  });
  
  app.use(express.static(path.resolve(__dirname, '..', 'build')));
  
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });