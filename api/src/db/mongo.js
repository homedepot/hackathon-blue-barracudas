const MongoClient = require('mongodb');
//const url = process.env.mongoUrl || 'mongodb://mongo/my_database'
const url = 'mongodb://127.0.0.1:27017/make_a_wish';

const connect = url =>
  MongoClient.connect(url, { useNewUrlParser: true }).then(client =>
    client.db()
  );

module.exports = async () => await connect(url);