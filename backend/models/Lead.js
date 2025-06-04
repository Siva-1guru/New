
// // const mongoose = require('mongoose');

// // const leadSchema = new mongoose.Schema({
// //   leadOwner: String,
// //   firstName: String,
// //   lastName: String,
// //   company: String,
// //   title: String,
// //   phone: String,
// //   mobile: String,
// //   email: String,
// //   fax: String,
// //   website: String,
// //   leadSource: String,
// //   leadStatus: String,
// //   industry: String,
// //   annualRevenue: String,
// //   noOfEmployees: String,
// //   rating: String,
// //   skypeId: String,
// //   secondaryEmail: String,
// //   twitter: String,
// // });

// // const Lead = mongoose.model('Lead', leadSchema);

// // // module.exports = Lead;
// // const mongoose = require('mongoose');

// // const leadSchema = new mongoose.Schema({
// //   leadOwner: String,
// //   firstName: String,
// //   lastName: String,
// //   company: String,
// //   title: String,
// //   phone: String,
// //   mobile: String,
// //   email: String,
// //   fax: String,
// //   website: String,
// //   leadSource: String,
// //   leadStatus: String,
// //   industry: String,
// //   annualRevenue: String,
// //   noOfEmployees: String,
// //   rating: String,
// //   skypeId: String,
// //   secondaryEmail: String,
// //   twitter: String,
// // }, { timestamps: true });

// // module.exports = mongoose.model('Lead', leadSchema);
// import mongoose from 'mongoose';

// const leadSchema = new mongoose.Schema({
//   leadOwner: { type: String, required: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   company: String,
//   title: String,
//   phone: String,
//   mobile: String,
//   email: { type: String, required: true },
//   fax: String,
//   website: String,
//   leadSource: String,
//   leadStatus: String,
//   industry: String,
//   annualRevenue: String,
//   noOfEmployees: String,
//   rating: String,
//   skypeId: String,
//   secondaryEmail: String,
//   twitter: String,
// }, { timestamps: true });

// export default mongoose.model('Lead', leadSchema);  // ES Module export
import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  leadOwner: String,
  firstName: String,
  lastName: String,
  company: String,
  title: String,
  phone: String,
  mobile: String,
  email: String,
  fax: String,
  website: String,
  leadSource: String,
  leadStatus: String,
  industry: String,
  annualRevenue: String,
  noOfEmployees: String,
  rating: String,
  skypeId: String,
  secondaryEmail: String,
  twitter: String,
}, { timestamps: true });

export default mongoose.model('Lead', LeadSchema);
