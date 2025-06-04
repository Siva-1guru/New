// // // // import Lead from '../models/Lead.js';
// // // // import Deal from '../models/dealModel.js';
// // // // import Task from '../models/Task.js';
// // // // import Meeting from '../models/Meeting.js';
// // // // import Project from '../models/Project.js';
// // // // import Document from '../models/Document.js';

// // // // export const getReports = async (req, res) => {
// // // //   try {
// // // //     // Leads per month
// // // //     const leads = await Lead.aggregate([
// // // //       {
// // // //         $group: {
// // // //           _id: { $month: "$createdAt" },
// // // //           count: { $sum: 1 }
// // // //         }
// // // //       }
// // // //     ]);

// // // //     // Deals - won vs lost
// // // //     const deals = await Deal.aggregate([
// // // //       {
// // // //         $group: {
// // // //           _id: "$status",
// // // //           count: { $sum: 1 }
// // // //         }
// // // //       }
// // // //     ]);

// // // //     const meetingsCount = await Meeting.countDocuments();
// // // //     const tasksCount = await Task.countDocuments();
// // // //     const callsCount = 0; // if you have Call model, add it

// // // //     const projects = await Project.find();
// // // //     const totalProjects = projects.length;
// // // //     const completed = projects.filter(p => p.status === 'Completed').length;
// // // //     const ongoing = totalProjects - completed;

// // // //     const documentsCount = await Document.countDocuments();

// // // //     res.json({
// // // //       leads,
// // // //       deals,
// // // //       activities: [
// // // //         { type: 'Meetings', count: meetingsCount },
// // // //         { type: 'Calls', count: callsCount },
// // // //         { type: 'Tasks', count: tasksCount },
// // // //       ],
// // // //       projects: {
// // // //         total: totalProjects,
// // // //         completed,
// // // //         ongoing
// // // //       },
// // // //       documents: {
// // // //         total: documentsCount
// // // //       }
// // // //     });
// // // //   } catch (err) {
// // // //     res.status(500).json({ message: err.message });
// // // //   }
// // // // };
// // // exports.getLeadsReport = async (req, res) => {
// // //   const data = [
// // //     { month: "Jan", count: 12 },
// // //     { month: "Feb", count: 18 },
// // //     { month: "Mar", count: 10 },
// // //   ];
// // //   res.json(data);
// // // };

// // // exports.getDealsReport = async (req, res) => {
// // //   const data = [
// // //     { status: "Won", count: 8 },
// // //     { status: "Lost", count: 4 },
// // //   ];
// // //   res.json(data);
// // // };

// // // exports.getActivitiesReport = async (req, res) => {
// // //   const data = [
// // //     { type: "Meetings", count: 5 },
// // //     { type: "Calls", count: 7 },
// // //     { type: "Tasks", count: 3 },
// // //   ];
// // //   res.json(data);
// // // };

// // // exports.getProjectsReport = async (req, res) => {
// // //   const data = {
// // //     total: 12,
// // //     completed: 9,
// // //     ongoing: 3,
// // //   };
// // //   res.json(data);
// // // };

// // // exports.getDocumentsReport = async (req, res) => {
// // //   const data = {
// // //     total: 34,
// // //     uploadedToday: 2,
// // //   };
// // //   res.json(data);
// // // };
// // const Lead = require('../models/Lead');
// // const Deal = require('../models/dealModel');
// // const Task = require('../models/Task');
// // const Meeting = require('../models/Meeting');
// // const Call = require('../models/Call');
// // const Project = require('../models/Project');
// // const Document = require('../models/Document');

// // const getReportData = async (req, res) => {
// //   try {
// //     // Leads per month
// //     const leads = await Lead.aggregate([
// //       {
// //         $group: {
// //           _id: { $month: "$createdAt" },
// //           count: { $sum: 1 }
// //         }
// //       },
// //       { $sort: { "_id": 1 } }
// //     ]);

// //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
// //                         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// //     const leadData = leads.map(l => ({
// //       month: monthNames[l._id - 1],
// //       count: l.count
// //     }));

// //     // Deals status
// //     const wonDeals = await Deal.countDocuments({ status: "Won" });
// //     const lostDeals = await Deal.countDocuments({ status: "Lost" });

// //     // Activities
// //     const meetingCount = await Meeting.countDocuments();
// //     const callCount = await Call.countDocuments();
// //     const taskCount = await Task.countDocuments();

// //     // Projects
// //     const totalProjects = await Project.countDocuments();
// //     const completedProjects = await Project.countDocuments({ status: "Completed" });
// //     const ongoingProjects = await Project.countDocuments({ status: "Ongoing" });

// //     // Documents
// //     const totalDocuments = await Document.countDocuments();
// //     const uploadedToday = await Document.countDocuments({
// //       createdAt: { $gte: new Date().setHours(0, 0, 0, 0) }
// //     });

// //     res.json({
// //       leads: leadData,
// //       deals: [
// //         { status: "Won", count: wonDeals },
// //         { status: "Lost", count: lostDeals }
// //       ],
// //       activities: [
// //         { type: "Meetings", count: meetingCount },
// //         { type: "Calls", count: callCount },
// //         { type: "Tasks", count: taskCount }
// //       ],
// //       projects: {
// //         total: totalProjects,
// //         completed: completedProjects,
// //         ongoing: ongoingProjects
// //       },
// //       documents: {
// //         total: totalDocuments,
// //         uploadedToday
// //       }
// //     });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: "Failed to fetch report data" });
// //   }
// // };

// // module.exports = { getReportData };
// import Lead from '../models/Lead.js';
// import Deal from '../models/dealModel.js';
// import Task from '../models/Task.js';
// import Meeting from '../models/Meeting.js';
// import Call from '../models/Call.js';
// import Project from '../models/Project.js';
// import Document from '../models/Document.js';

// export const getReportData = async (req, res) => {
//   try {
//     const leads = await Lead.aggregate([
//       { $group: { _id: { $month: "$createdAt" }, count: { $sum: 1 } } },
//       { $sort: { "_id": 1 } }
//     ]);

//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
//                         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//     const leadData = leads.map(l => ({
//       month: monthNames[l._id - 1],
//       count: l.count
//     }));

//     const wonDeals = await Deal.countDocuments({ status: "Won" });
//     const lostDeals = await Deal.countDocuments({ status: "Lost" });

//     const meetingCount = await Meeting.countDocuments();
//     const callCount = await Call.countDocuments();
//     const taskCount = await Task.countDocuments();

//     const totalProjects = await Project.countDocuments();
//     const completedProjects = await Project.countDocuments({ status: "Completed" });
//     const ongoingProjects = await Project.countDocuments({ status: "Ongoing" });

//     const totalDocuments = await Document.countDocuments();
//     const uploadedToday = await Document.countDocuments({
//       createdAt: { $gte: new Date().setHours(0, 0, 0, 0) }
//     });

//     res.json({
//       leads: leadData,
//       deals: [
//         { status: "Won", count: wonDeals },
//         { status: "Lost", count: lostDeals }
//       ],
//       activities: [
//         { type: "Meetings", count: meetingCount },
//         { type: "Calls", count: callCount },
//         { type: "Tasks", count: taskCount }
//       ],
//       projects: {
//         total: totalProjects,
//         completed: completedProjects,
//         ongoing: ongoingProjects
//       },
//       documents: {
//         total: totalDocuments,
//         uploadedToday
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to fetch report data" });
//   }
// };
import Lead from '../models/Lead.js';
import Deal from '../models/dealModel.js';
import Task from '../models/Task.js';
import Meeting from '../models/Meeting.js';
import Call from '../models/Call.js';
import Project from '../models/Project.js';
import Document from '../models/Document.js';

export const getReportData = async (req, res) => {
  try {
    // Leads per month
    const leads = await Lead.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                        "Aug", "Sep", "Oct", "Nov", "Dec"];

    const leadData = leads.map(l => ({
      month: monthNames[l._id - 1],
      count: l.count
    }));

    // Deals status
    const wonDeals = await Deal.countDocuments({ status: "Won" });
    const lostDeals = await Deal.countDocuments({ status: "Lost" });

    // Activities
    const meetingCount = await Meeting.countDocuments();
    const callCount = await Call.countDocuments();
    const taskCount = await Task.countDocuments();

    // Projects
    const totalProjects = await Project.countDocuments();
    const completedProjects = await Project.countDocuments({ status: "Completed" });
    const ongoingProjects = await Project.countDocuments({ status: "Ongoing" });

    // Documents
    const totalDocuments = await Document.countDocuments();
    const uploadedToday = await Document.countDocuments({
      createdAt: { $gte: new Date().setHours(0, 0, 0, 0) }
    });

    // Final report response
    res.json({
      leads: leadData,
      deals: [
        { status: "Won", count: wonDeals },
        { status: "Lost", count: lostDeals }
      ],
      activities: [
        { type: "Meetings", count: meetingCount },
        { type: "Calls", count: callCount },
        { type: "Tasks", count: taskCount }
      ],
      projects: {
        total: totalProjects,
        completed: completedProjects,
        ongoing: ongoingProjects
      },
      documents: {
        total: totalDocuments,
        uploadedToday
      }
    });
  } catch (err) {
    console.error("Error fetching report data:", err);
    res.status(500).json({ message: "Failed to fetch report data" });
  }
};

