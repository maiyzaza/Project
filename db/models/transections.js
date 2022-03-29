var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TransectionSchema = new Schema({
  code: String,
  categoryName: String,
  amount: Number,
  createAt: Date
});

if (mongoose.models.Transections) {
  delete mongoose.models.Transections
}

module.exports = mongoose.model('Transections', TransectionSchema, "transections", {strict: true});