"use strict";

const MongoClient = require('mongodb').MongoClient;
const config = require('../config/config');
const client = new MongoClient(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

exports.rawget = (name, query, limit) => {
    return new Promise((resolve, reject) => {
       
        client.connect(error => {
            if (error) { return console.log(error); }
            console.log('Is Connected', client.topology.isConnected());
            client.db(config.DB_NAME).collection(name).find(query).limit(limit).toArray((error, data) => {
                if (error) {
                    console.log("Error", error);
                    reject(error);
                } else {
                    resolve(data);
                }
                // client.close();
            });

        });
    });
}