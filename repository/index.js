"use strict";


const MongoClient = require('mongodb').MongoClient;
const config = require('../config/config');

exports.rawget = (name, query) => {
    MongoClient.connect(config.DB_URI, function (error, db) {
        if (error) { return console.log(error); }

        db.db(config.DB_NAME).collection("heads").find(query).toArray((error, result) => {
            if (error) {
                console.log("Error", error);
                reject(error);
            }
            console.log(result);
            db.close();
        });
    });
    // return new Promise((resolve, reject) => {
    //     console.log(name);
    //     console.log(db);
    //     db.collection(name).find().toArray((error, data) => {
    //         if (error) {
    //             console.log("Error", error);
    //             reject(error);
    //         } else {
    //             resolve(data);
    //         }
    //     });    
    // });  
}