// // // // const mongoose = require('mongoose');

// // // // const productSchema = new mongoose.Schema({
// // // //   title: String,
// // // //   description: String,
// // // //   price: Number,
// // // //   image: String,
// // // // }, { timestamps: true });

// // // // module.exports = mongoose.model('Product', productSchema);
// // // // const mongoose = require('mongoose');

// // // // const productSchema = new mongoose.Schema({
// // // //   title: {
// // // //     type: String,
// // // //     required: true,
// // // //   },
// // // //   description: String,
// // // //   price: {
// // // //     type: Number,
// // // //     default: 0,
// // // //   },
// // // //   image: {
// // // //     type: String,
// // // //     default: '',
// // // //   },
// // // // }, { timestamps: true });

// // // // module.exports = mongoose.model('Product', productSchema);
// // // const dealSchema = new mongoose.Schema({
// // //   name: String,
// // //   product: {
// // //     type: mongoose.Schema.Types.ObjectId,
// // //     ref: 'Product', // 👈 Reference to Product model
// // //   },
// // //   value: Number,
// // //   stage: String,
// // //   date: String,
// // // });
// // import mongoose from 'mongoose';

// // // Define the Deal schema
// // const dealSchema = new mongoose.Schema({
// //   name: {
// //     type: String,
// //     required: true, // Make the name required
// //     trim: true, // Remove any leading or trailing spaces
// //   },
// //   product: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: 'Product', // Reference to the Product model
// //     required: true, // Make the product required
// //   },
// //   value: {
// //     type: Number,
// //     required: true, // Ensure a value is provided
// //     min: 0, // Ensure the value is not negative
// //   },
// //   stage: {
// //     type: String,
// //     required: true, // Stage is a required field
// //     enum: ['Prospecting', 'Negotiation', 'Closed Won', 'Closed Lost'], // Possible values for the stage
// //   },
// //   date: {
// //     type: Date, // Use Date type for better date handling
// //     required: true,
// //   },
// // }, {
// //   timestamps: true, // Automatically add createdAt and updatedAt fields
// // });

// // // Export the Deal model
// // const Deal = mongoose.model('Deal', dealSchema);

// // export default Deal; // Export using default export for consistency
// import mongoose from 'mongoose';

// // Define the Deal schema
// const dealSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true, // Make the name required
//     trim: true, // Remove any leading or trailing spaces
//   },
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product', // Reference to the Product model
//     required: true, // Make the product required
//   },
//   value: {
//     type: Number,
//     required: true, // Ensure a value is provided
//     min: 0, // Ensure the value is not negative
//   },
//   stage: {
//     type: String,
//     required: true, // Stage is a required field
//     enum: ['Prospecting', 'Negotiation', 'Closed Won', 'Closed Lost'], // Possible values for the stage
//   },
//   date: {
//     type: Date, // Use Date type for better date handling
//     required: true,
//   },
// }, {
//   timestamps: true, // Automatically add createdAt and updatedAt fields
// });

// // Use this approach to check if the model is already registered
// const Deal = mongoose.models.Deal || mongoose.model('Deal', dealSchema);

// export default Deal; // Export using default export for consistency
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
