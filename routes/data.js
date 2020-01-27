"use strict";

const controller = require("../controller/dataCtrl");

exports.data = (app) => {
    app.post('/data', controller.reportsData);
    app.post('/event', controller.eventData);
    app.post('/create', controller.createData);
};