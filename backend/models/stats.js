// const mongoose = require('mongoose');

// const StatsSchema = new mongoose.Schema({
//   contacts: { type: Number, default: 0 },
//   deals: { type: Number, default: 0 },
//   revenue: { type: Number, default: 0 },
//   tasks: { type: Number, default: 0 }
// });

// module.exports = mongoose.model('Stats', StatsSchema);
import mongoose from 'mongoose';

const StatsSchema = new mongoose.Schema({
  contacts: { type: Number, default: 0 },
  deals: { type: Number, default: 0 },
  revenue: { type: Number, default: 0 },
  tasks: { type: Number, default: 0 }
});

export default mongoose.model('Stats', StatsSchema);
