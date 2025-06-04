// import mongoose from 'mongoose';

// const documentSchema = new mongoose.Schema({
//   name: String,
//   path: String,
//   size: Number,
//   type: String,
//   uploadedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.model('Document', documentSchema);
// models/Document.js
// import mongoose from 'mongoose';

// const documentSchema = new mongoose.Schema({
//   filename: {
//     type: String,
//     required: true
//   },
//   filePath: {
//     type: String,
//     required: true
//   },
//   uploadedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Document = mongoose.model('Document', documentSchema);
// export default Document;
// import mongoose from 'mongoose';

// const documentSchema = new mongoose.Schema({
//   filename: String,
//   filePath: String,
//   uploadedAt: { type: Date, default: Date.now }
// });

// export default mongoose.model('Document', documentSchema);
// models/Document.js
import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  name: String,
  size: String,
  type: String,
  url: String,
  uploadedOn: String,
});

const Document = mongoose.model('Document', documentSchema);
export default Document;
