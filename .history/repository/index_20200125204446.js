"use strict";

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const config = require('../config/config');
// const client = new MongoClient(config.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

mongoose.connect(
    config.DB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
        poolSize: 10,
        bufferMaxEntries: 0
    }
);

mongoose.connection.once('open', function () {
    console.info('Mongoose connection opened ');
});

const Schema = mongoose.Schema;

// exports.rawget = (name, query, limit) => {
//     return new Promise((resolve, reject) => {

//         client.connect(error => {
//             if (error) { return console.log(error); }
//             console.log('Is Connected', client.topology.isConnected());
//             client.db(config.DB_NAME).collection(name).find(query).limit(limit).toArray((error, data) => {
//                 if (error) {
//                     console.log("Error", error);
//                     reject(error);
//                 } else {
//                     resolve(data);
//                 }
//                 // client.close();
//             });
//         });
//     });
// }


exports.rawget = (name, query, limit) => {
  return new Promise((resolve, reject) => {


    const ProductSchema = new Schema({}, {
      strict: false
    });
    const Grades = mongoose.model('Grades', ProductSchema, 'grades');

    Grades.find(query)
      .limit(limit)
      .exec((error, data) => {
        if (error) {
          console.log("Error", error);
          reject(error);
        } else {
          resolve(data);
        }
      });
  });
}