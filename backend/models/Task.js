// const mongoose = require('mongoose');

// const taskSchema = new mongoose.Schema({
//   subject: String,
//   dueDate: String,
//   contact: String,
//   account: String,
//   status: String,
//   priority: String,
//   reminder: Boolean,
// });

// module.exports = mongoose.model('Task', taskSchema);
import mongoose from 'mongoose'; // Use ES module import syntax

const taskSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  dueDate: { type: String, required: true },
  contact: { type: String, required: true },
  account: { type: String, required: true },
  status: { type: String, required: true },
  priority: { type: String, required: true },
  reminder: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

export default Task; // Use ES module export default
