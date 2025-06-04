// models/Quote.js
import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  unitPrice: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  taxRate: { type: Number, default: 0 },
  total: { type: Number, required: true },
}, { timestamps: true });

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
