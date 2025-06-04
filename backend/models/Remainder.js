// const mongoose = require('mongoose');

// const reminderSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
//   email: String,
//   reminder: {
//     message: String,
//     time: Date,
//     channel: String,  // whatsapp / email
//     sent: { type: Boolean, default: false },
//   }
// });

// const Reminder = mongoose.model('Reminder', reminderSchema);
// module.exports = Reminder;
const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  leadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead' },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  repeat: { type: String },
  notes: { type: String }
});

module.exports = mongoose.model('Reminder', reminderSchema);
