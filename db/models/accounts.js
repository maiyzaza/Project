var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TransectionSchema = new Schema({
  code: String,
  firstName: String,
  lastName: String,
  balance: Number
});

module.exports = mongoose.model('Transections', TransectionSchema, "transections", {strict: true});