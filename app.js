"use strict";

const config = require('./config/config');
const express = require('express');

const app = express();

require('./config/express')(app);

const apiRoutes = express.Router();

require('./routes/index')(apiRoutes);

process.on('uncaughtException', (err) => {
  console.log("Process UncaughtException");
  console.log(err);
});

process.on('exit', (code) => {
  console.log("Process Exit");
  console.log(code);
});

app.use('/api/v1', apiRoutes);

app.set('port', config.port);

app.listen(app.get('port'), () => {
  const msg = `Express App Server listening on port : ${app.get('port')} Environment: ${app.get('env')} Process ID: ${process.pid}`;
  console.log(msg);
});