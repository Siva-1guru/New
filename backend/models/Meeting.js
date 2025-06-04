// const mongoose = require('mongoose');

// const meetingSchema = new mongoose.Schema({
//   title: String,
//   date: Date,
//   participants: [String],
//   description: String,
// });

// module.exports = mongoose.model('Meeting', meetingSchema);
// const mongoose = require('mongoose');

// const meetingSchema = new mongoose.Schema({
//   title: String,
//   date: String,
//   time: String,
//   participants: [String],
//   description: String
// });

// module.exports = mongoose.model('Meeting', meetingSchema);
// const mongoose = require('mongoose');
// const meetingsConnection = mongoose.createConnection(process.env.MONGO_URI_MEETINGS, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const meetingSchema = new mongoose.Schema({
//   description: { type: String, required: true },
//   from: { type: Date, required: true },
//   to: { type: Date, required: true },
//   host: { type: String, required: true },
//   participants: { type: [String], required: true },
//   relatedTo: { type: String },
//   repeat: { type: String },
//   reminder: { type: String },
// });

// const Meeting = meetingsConnection.model('Meeting', meetingSchema);

// // module.exports = Meeting;
// const mongoose = require("mongoose");

// const meetingSchema = new mongoose.Schema({
//   description: { type: String, required: true },
//     from: { type: Date, required: true },
//     to: { type: Date, required: true },
//     host: { type: String, required: true },
//     participants: { type: [String], required: true },
//     relatedTo: { type: String },
//     repeat: { type: String },
//     reminder: { type: String },
//   // title: { type: String, required: true },
//   // date: { type: String, required: true },
//   // time: { type: String, required: true },
//   // participants: [String],
// });

// module.exports = mongoose.model("Meeting", meetingSchema);
import mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema({
  description: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  host: { type: String, required: true },
  location: { type: String, required: true },
  participants: { type: [String], required: true },
  relatedTo: { type: String, required: false },  // Make this optional if not always needed
  repeat: { type: String, required: false },     // Make this optional if not always needed
  reminder: { type: String, required: false },   // Make this optional if not always needed
}, { timestamps: true }); // Add automatic createdAt and updatedAt fields

// Use export default for ES modules
export default mongoose.model('Meeting', meetingSchema);
