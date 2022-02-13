const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
  res.send('Wake up call');
});

app.use('/api', proxy('https://api.binance.com'));

app.listen(3100);