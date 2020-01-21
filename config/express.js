const config = require('./config');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function (app) {

  app.use(bodyParser.urlencoded({
    extended: true,
    limit: config.logMaxFileSize
  }));
  app.use(bodyParser.json({
    limit: config.logMaxFileSize
  }));
  app.disable('x-powered-by');
  app.use(methodOverride());
  app.use(cors());
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,access_token,multipart/form-data');
    next()
  });

};