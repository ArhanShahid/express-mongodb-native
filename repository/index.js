"use strict";

const MongoClient = require('mongodb').MongoClient;
const config = require('../config/config');

exports.rawget = (name, query) => {
    return new Promise((resolve, reject) => {
        const client = new MongoClient(config.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        client.connect(error => {
            if (error) { return console.log(error); }
            client.db(config.DB_NAME).collection(name).find(query).toArray((error, data) => {
                if (error) {
                    console.log("Error", error);
                    reject(error);
                } else {
                    resolve(data);
                }
                client.close();
            });

        });
    });
}