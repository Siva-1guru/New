// const mongoose = require('mongoose');

// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String
// });

// module.exports = mongoose.model('Contact', contactSchema);
// import mongoose from 'mongoose';

// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String
// });

// export default mongoose.model('Contact', contactSchema); // Use export default
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
