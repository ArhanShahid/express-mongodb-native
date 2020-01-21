"use strict";

const MongoClient = require('mongodb').MongoClient;
const config = require('../config/config');

exports.rawget = (name, query) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(config.DB_URI, function (error, db) {
            if (error) { return console.log(error); }
            db.db(config.DB_NAME).collection("heads").find(query).toArray((error, data) => {
                if (error) {
                    console.log("Error", error);
                    reject(error);
                } else {
                    resolve(data);
                }
                db.close();
            });
        });
    });
}