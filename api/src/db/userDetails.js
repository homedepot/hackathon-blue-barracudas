const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/make_a_wish');

const Schema = mongoose.Schema;
const UserDetail = new Schema({
  username: String,
  password: String
});
module.exports = mongoose.model('userInfo', UserDetail, 'userInfo');