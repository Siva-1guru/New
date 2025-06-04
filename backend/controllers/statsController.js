const Contact = require('../models/Contact');

exports.getStats = async (req, res) => {
  const contacts = await Contact.countDocuments();
  const deals = 5;      // optional static/demo value
  const tasks = 10;     // optional static/demo value
  const revenue = 7500; // optional static/demo value

  res.json({ contacts, deals, tasks, revenue });
};
