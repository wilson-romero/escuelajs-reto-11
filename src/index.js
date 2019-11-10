const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const { config } = require('./config');
const platziStore = require('./routes');
const authApi = require('./routes/auth');

app.use(bodyParser.json())

app.get('/', (req, res) => {
  let userInfo = req.header('user-agent');
  res.send(`UserInfo: ${userInfo}`);
});

authApi(app);
platziStore(app);

app.listen(config.port, err => {
  if (err) {
    console.error('Error: ', err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});
