const mongoose = require('mongoose')

const Schema = wishInfo;

const passportLocalMongoose = require('passport-local-mongoose')

const wishSchema = new Schema({
  createDate: Double,
  lastUpdateDate: Double,
  lastUpdateUserid: String,
  wishDetailsText: String,
  wishStatus: String,
  wishType: String,
  childFirstname: String,
  childLastname:String,
  childAge: String,
  parentFirstName:String,
  parentLastname: String,
  childHomeCity: String
})

Account.plugin(passportLocalMongoose)

module.exports = mongoose.model('WishSchema', wishSchema)
