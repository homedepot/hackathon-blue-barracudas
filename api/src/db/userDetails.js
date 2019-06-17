const mongoose = require('mongoose');
mongoose.set('debug', true);
const url = process.env.mongoUrl || 'mongodb://mongo/my_database'
mongoose.connect(url);


const Schema = mongoose.Schema;
const UserDetailsSchema = new Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('UserDetail', UserDetailsSchema, 'userDetails');