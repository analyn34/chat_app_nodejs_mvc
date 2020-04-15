const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MessageSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true }
});

module.exports = mongoose.model('Message', MessageSchema);