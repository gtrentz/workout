// server/models/YourModel.js
const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  // Define your schema fields
});

const YourModel = mongoose.model('YourModel', yourSchema);

module.exports = YourModel;
