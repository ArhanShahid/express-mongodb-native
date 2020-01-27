"use strict";

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(config.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

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

const mongoose = require('mongoose');
const config = require('../config/config');
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
  
const Schema = new mongoose.Schema({}, {
  strict: false
});
const Grades = mongoose.model('grades', Schema, 'grades');
const Companies = mongoose.model('companies', Schema, 'companies');
const Trips = mongoose.model('trips', Schema, 'trips');

exports.rawget = (model, query, limit, selectParams) => {
  return new Promise((resolve, reject) => {
    let m = null;
    if (model == 'grades') {
      m = Grades;
    } else if(model == 'trips') {
      m = Trips
    } else {
      m = Companies
    }
    m.find(query)
      .select(selectParams || "")
      .limit(limit)
      .lean(true)
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

exports.createData = (obj) => {
  return new Promise((resolve, reject) => {
    let m = new Companies(obj);
    m.save((error, data) => {
        if (error) {
          console.log("Error", error);
          reject(error);
        } else {
          resolve(data);
        }
      });
  });
}