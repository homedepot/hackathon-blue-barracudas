const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/make_a_wish');

const Schema = mongoose.Schema;
const UserDetailsSchema = new Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('UserDetail', UserDetailsSchema, 'userDetails');