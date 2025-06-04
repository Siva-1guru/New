 
import mongoose from 'mongoose';

const callSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  type: { type: String, enum: ['Inbound', 'Outbound'], default: 'Outbound' },
  duration: { type: Number },
  date: { type: Date, required: true },
  contact: { type: String },
  notes: { type: String }
}, { timestamps: true });

const Call = mongoose.model('Call', callSchema);

export default Call;
