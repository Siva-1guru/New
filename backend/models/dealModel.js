// const mongoose = require('mongoose');

// // Define the deal schema
// const dealSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   value: { type: Number, required: true },
//   stage: { type: String, required: true },
//   date: { type: String, required: true },
// }, {
//   timestamps: true, // Automatically adds createdAt and updatedAt
// });

// // Create the Deal model
// const Deal = mongoose.model('Deal', dealSchema);

// // module.exports = Deal;
// const mongoose = require('mongoose');

// const dealSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   value: { type: Number, required: true },
//   product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
//   stage: { type: String, required: true },
//   date: { type: String, required: true },
// }, {
//   timestamps: true, // Automatically adds createdAt and updatedAt
// });

// module.exports = mongoose.model('Deal', dealSchema);
// backend/models/dealModel.js
import mongoose from 'mongoose';

const dealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  stage: { type: String, required: true },
  date: { type: String, required: true },
}, {
  timestamps: true,
});

const Deal = mongoose.model('Deal', dealSchema);
export default Deal;
