// // // // // models.js
// // // // const mongoose = require("mongoose");

// // // // // Define schemas for MongoDB collections

// // // // // Lead Schema
// // // // const leadSchema = new mongoose.Schema({
// // // //   month: String,
// // // //   count: Number,
// // // // });

// // // // const Lead = mongoose.model("Lead", leadSchema);

// // // // // Deal Schema
// // // // const dealSchema = new mongoose.Schema({
// // // //   status: String,  // "Won" or "Lost"
// // // //   count: Number,
// // // // });

// // // // const Deal = mongoose.model("Deal", dealSchema);

// // // // // Activity Schema
// // // // const activitySchema = new mongoose.Schema({
// // // //   type: String,  // "Meetings", "Calls", or "Tasks"
// // // //   count: Number,
// // // // });

// // // // const Activity = mongoose.model("Activity", activitySchema);

// // // // // Project Schema
// // // // const projectSchema = new mongoose.Schema({
// // // //   status: String,  // "Completed" or "Ongoing"
// // // //   count: Number,
// // // // });

// // // // const Project = mongoose.model("Project", projectSchema);

// // // // // Document Schema
// // // // const documentSchema = new mongoose.Schema({
// // // //   title: String,
// // // //   uploadedToday: Number,
// // // //   total: Number,
// // // // });

// // // // const Document = mongoose.model("Document", documentSchema);

// // // // module.exports = { Lead, Deal, Activity, Project, Document };
// // // import mongoose from 'mongoose';

// // // const leadSchema = new mongoose.Schema({
// // //   month: String,
// // //   count: Number,
// // // });

// // // const Lead = mongoose.model('Lead', leadSchema);

// // // const dealSchema = new mongoose.Schema({
// // //   status: String, 
// // //   count: Number,
// // // });

// // // const Deal = mongoose.model('Deal', dealSchema);

// // // const activitySchema = new mongoose.Schema({
// // //   type: String,
// // //   count: Number,
// // // });

// // // const Activity = mongoose.model('Activity', activitySchema);

// // // const projectSchema = new mongoose.Schema({
// // //   status: String,
// // //   count: Number,
// // // });

// // // const Project = mongoose.model('Project', projectSchema);

// // // const documentSchema = new mongoose.Schema({
// // //   title: String,
// // //   uploadedToday: Number,
// // //   total: Number,
// // // });

// // // const Document = mongoose.model('Document', documentSchema);

// // // export { Lead, Deal, Activity, Project, Document };  // Ensure you're using ES module export
// // import mongoose from 'mongoose';

// // // Lead Model
// // const leadSchema = new mongoose.Schema({
// //   month: { type: String, required: true },
// //   count: { type: Number, required: true },
// // });
// // const Lead = mongoose.model('Lead', leadSchema);

// // // Deal Model
// // const dealSchema = new mongoose.Schema({
// //   status: { type: String, required: true },
// //   count: { type: Number, required: true },
// // });
// // const Deal = mongoose.model('Deal', dealSchema);

// // // Activity Model
// // const activitySchema = new mongoose.Schema({
// //   type: { type: String, required: true },
// //   count: { type: Number, required: true },
// // });
// // const Activity = mongoose.model('Activity', activitySchema);

// // // Project Model
// // const projectSchema = new mongoose.Schema({
// //   status: { type: String, required: true },
// //   count: { type: Number, required: true },
// // });
// // const Project = mongoose.model('Project', projectSchema);

// // // Document Model
// // const documentSchema = new mongoose.Schema({
// //   title: { type: String, required: true },
// //   uploadedToday: { type: Number, required: true },
// //   total: { type: Number, required: true },
// // });
// // const Document = mongoose.model('Document', documentSchema);

// // export { Lead, Deal, Activity, Project, Document };  // Correct export
// // import mongoose from 'mongoose';

// // // Lead Model
// // const leadSchema = new mongoose.Schema({
// //   month: { type: String, required: true },
// //   count: { type: Number, required: true },
// // });
// // const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

// // // Deal Model
// // const dealSchema = new mongoose.Schema({
// //   status: { type: String, required: true },
// //   count: { type: Number, required: true },
// // });
// // const Deal = mongoose.models.Deal || mongoose.model('Deal', dealSchema);

// // // Activity Model
// // const activitySchema = new mongoose.Schema({
// //   type: { type: String, required: true },
// //   count: { type: Number, required: true },
// // });
// // const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);

// // // Project Model
// // const projectSchema = new mongoose.Schema({
// //   status: { type: String, required: true },
// //   count: { type: Number, required: true },
// // });
// // const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

// // // Document Model
// // const documentSchema = new mongoose.Schema({
// //   title: { type: String, required: true },
// //   uploadedToday: { type: Number, required: true },
// //   total: { type: Number, required: true },
// // });
// // const Document = mongoose.models.Document || mongoose.model('Document', documentSchema);

// // export { Lead, Deal, Activity, Project, Document };
// import mongoose from 'mongoose';

// // Lead Model
// const leadSchema = new mongoose.Schema({
//   month: { type: String, required: true },
//   count: { type: Number, required: true },
// });
// const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

// // Deal Model
// const dealSchema = new mongoose.Schema({
//   status: { type: String, required: true },
//   count: { type: Number, required: true },
// });
// const Deal = mongoose.models.Deal || mongoose.model('Deal', dealSchema);

// // Activity Model
// const activitySchema = new mongoose.Schema({
//   type: { type: String, required: true },
//   count: { type: Number, required: true },
// });
// const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);

// // Project Model
// const projectSchema = new mongoose.Schema({
//   status: { type: String, required: true },
//   count: { type: Number, required: true },
// });
// const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

// // Document Model
// const documentSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   uploadedToday: { type: Number, required: true },
//   total: { type: Number, required: true },
// });
// const Document = mongoose.models.Document || mongoose.model('Document', documentSchema);

// export { Lead, Deal, Activity, Project, Document };
import mongoose from 'mongoose';

// Lead Model
const leadSchema = new mongoose.Schema({
  month: { type: String, required: true },
  count: { type: Number, required: true },
});
const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

// Deal Model
const dealSchema = new mongoose.Schema({
  status: { type: String, required: true },
  count: { type: Number, required: true },
});
const Deal = mongoose.models.Deal || mongoose.model('Deal', dealSchema);

// Activity Model
const activitySchema = new mongoose.Schema({
  type: { type: String, required: true },
  count: { type: Number, required: true },
});
const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);

// Project Model
const projectSchema = new mongoose.Schema({
  status: { type: String, required: true },
  count: { type: Number, required: true },
});
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

// Document Model
const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  uploadedToday: { type: Number, required: true },
  total: { type: Number, required: true },
});
const Document = mongoose.models.Document || mongoose.model('Document', documentSchema);

export { Lead, Deal, Activity, Project, Document };
