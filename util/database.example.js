const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (cb) => {
  MongoClient.connect(
    'mongodb+srv://<username>:<password>@cluster0.lnfhh.mongodb.net/<dbname>?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('connected');
      cb(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
