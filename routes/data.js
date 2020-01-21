"use strict";

const controller = require("../controller/dataCtrl");

exports.data = (app) => {

    app.get('/data', controller.reportsData);
};