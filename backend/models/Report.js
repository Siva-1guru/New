import mongoose from 'mongoose';

// Define the Report Schema
const reportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true, // Could be JSON or any data structure that represents your report data
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for tracking who created the report
    required: true,
  },
});

// Create a Report model
const Report = mongoose.model('Report', reportSchema);

export default Report;
