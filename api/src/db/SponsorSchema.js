const mongoose = require('mongoose')

const Schema = sponsorInfo;

const passportLocalMongoose = require('passport-local-mongoose')

const sponsorSchema = new Schema({
  sponserName: String,
  pocName: String,
  city: String,
  phone: String,
  image: Binary

})

Account.plugin(passportLocalMongoose)

module.exports = mongoose.model('SponsorSchema', sponsorSchema)
