const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    enum: ['dog2','dog1', 'dog3'],
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  userId: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user"
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
