
require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    DB_URI: process.env.DB_URI,
    DB_NAME: process.env.DB_NAME
};
