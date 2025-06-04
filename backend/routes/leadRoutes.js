
// // // // // module.exports = router;
// // // // import express from 'express';
// // // // import Lead from '../models/Lead.js'; // Ensure you're using '.js' for ES Modules

// // // // const router = express.Router();

// // // // // Get all leads
// // // // router.get('/', async (req, res) => {
// // // //   try {
// // // //     const leads = await Lead.find();
// // // //     res.json(leads);
// // // //   } catch (err) {
// // // //     res.status(500).json({ error: err.message });
// // // //   }
// // // // });

// // // // // Add new lead
// // // // router.post('/', async (req, res) => {
// // // //   try {
// // // //     const newLead = new Lead(req.body);
// // // //     await newLead.save();
// // // //     res.status(201).json(newLead);
// // // //   } catch (err) {
// // // //     res.status(400).json({ error: err.message });
// // // //   }
// // // // });

// // // // // ES Module export
// // // // // export default router;
// // // // import express from 'express';
// // // // import Lead from '../models/Lead.js';

// // // // const router = express.Router();

// // // // // Get all leads
// // // // router.get('/', async (req, res) => {
// // // //   try {
// // // //     const leads = await Lead.find();
// // // //     res.json(leads);
// // // //   } catch (err) {
// // // //     res.status(500).json({ error: err.message });
// // // //   }
// // // // });

// // // // // Add new lead
// // // // router.post('/', async (req, res) => {
// // // //   try {
// // // //     const newLead = new Lead(req.body);
// // // //     await newLead.save();
// // // //     res.status(201).json(newLead);
// // // //   } catch (err) {
// // // //     res.status(400).json({ error: err.message });
// // // //   }
// // // // });

// // // // // Update lead
// // // // router.put('/:id', async (req, res) => {
// // // //   try {
// // // //     const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
// // // //     if (!updatedLead) return res.status(404).json({ error: 'Lead not found' });
// // // //     res.json(updatedLead);
// // // //   } catch (err) {
// // // //     res.status(400).json({ error: err.message });
// // // //   }
// // // // });

// // // // // Delete lead
// // // // router.delete('/:id', async (req, res) => {
// // // //   try {
// // // //     const deletedLead = await Lead.findByIdAndDelete(req.params.id);
// // // //     if (!deletedLead) return res.status(404).json({ error: 'Lead not found' });
// // // //     res.json({ message: 'Lead deleted successfully' });
// // // //   } catch (err) {
// // // //     res.status(500).json({ error: err.message });
// // // //   }
// // // // });

// // // // export default router;
// // // import express from 'express';
// // // import Lead from '../models/Lead.js';

// // // const router = express.Router();

// // // // Get all leads
// // // router.get('/', async (req, res) => {
// // //   try {
// // //     const leads = await Lead.find();
// // //     res.json(leads);
// // //   } catch (err) {
// // //     console.error('Failed to get leads:', err);
// // //     res.status(500).json({ error: 'Server error while fetching leads' });
// // //   }
// // // });

// // // // Add new lead
// // // router.post('/', async (req, res) => {
// // //   try {
// // //     const newLead = new Lead(req.body);
// // //     await newLead.save();
// // //     res.status(201).json(newLead);
// // //   } catch (err) {
// // //     console.error('Failed to add lead:', err);
// // //     res.status(400).json({ error: err.message || 'Invalid lead data' });
// // //   }
// // // });

// // // // Update lead
// // // router.put('/:id', async (req, res) => {
// // //   try {
// // //     // Optional: add validation for req.body here if needed

// // //     const updatedLead = await Lead.findByIdAndUpdate(
// // //       req.params.id,
// // //       req.body,
// // //       { new: true, runValidators: true }
// // //     );

// // //     if (!updatedLead) {
// // //       return res.status(404).json({ error: 'Lead not found' });
// // //     }

// // //     res.json(updatedLead);
// // //   } catch (err) {
// // //     console.error('Failed to update lead:', err);
// // //     res.status(400).json({ error: err.message || 'Invalid data for update' });
// // //   }
// // // });

// // // // Delete lead
// // // router.delete('/:id', async (req, res) => {
// // //   try {
// // //     const deletedLead = await Lead.findByIdAndDelete(req.params.id);

// // //     if (!deletedLead) {
// // //       return res.status(404).json({ error: 'Lead not found' });
// // //     }

// // //     res.json({ message: 'Lead deleted successfully' });
// // //   } catch (err) {
// // //     console.error('Failed to delete lead:', err);
// // //     res.status(500).json({ error: 'Server error while deleting lead' });
// // //   }
// // // });

// // // export default router;
// // import express from 'express';
// // import Lead from '../models/Lead.js';

// // const router = express.Router();

// // // Get all leads
// // router.get('/', async (req, res) => {
// //   try {
// //     const leads = await Lead.find();
// //     res.json(leads);
// //   } catch (err) {
// //     console.error('Failed to get leads:', err);
// //     res.status(500).json({ error: 'Server error while fetching leads' });
// //   }
// // });

// // // Add new lead
// // router.post('/', async (req, res) => {
// //   try {
// //     const newLead = new Lead(req.body);
// //     await newLead.save();
// //     res.status(201).json(newLead);
// //   } catch (err) {
// //     console.error('Failed to add lead:', err);
// //     res.status(400).json({ error: err.message || 'Invalid lead data' });
// //   }
// // });

// // // Update lead
// // router.put('/:id', async (req, res) => {
// //   try {
// //     const updatedLead = await Lead.findByIdAndUpdate(
// //       req.params.id,
// //       req.body,
// //       { new: true }
// //     );

// //     if (!updatedLead) {
// //       return res.status(404).json({ error: 'Lead not found' });
// //     }

// //     res.json(updatedLead);
// //   } catch (err) {
// //     console.error('Failed to update lead:', err);
// //     res.status(400).json({ error: err.message || 'Invalid data for update' });
// //   }
// // });

// // // Delete lead
// // router.delete('/:id', async (req, res) => {
// //   try {
// //     const deletedLead = await Lead.findByIdAndDelete(req.params.id);

// //     if (!deletedLead) {
// //       return res.status(404).json({ error: 'Lead not found' });
// //     }

// //     res.json({ message: 'Lead deleted successfully' });
// //   } catch (err) {
// //     console.error('Failed to delete lead:', err);
// //     res.status(500).json({ error: 'Server error while deleting lead' });
// //   }
// // });

// // export default router;
// import express from 'express';
// import Lead from '../models/Lead.js';

// const router = express.Router();

// // Get all leads (sorted by newest first)
// router.get('/', async (req, res) => {
//   try {
//     const leads = await Lead.find().sort({ createdAt: -1 });
//     res.json(leads);
//   } catch (err) {
//     console.error('Failed to get leads:', err);
//     res.status(500).json({ error: 'Server error while fetching leads' });
//   }
// });

// // Add new lead
// router.post('/', async (req, res) => {
//   try {
//     const newLead = new Lead(req.body);
//     await newLead.save();
//     res.status(201).json(newLead);
//   } catch (err) {
//     console.error('Failed to add lead:', err);
//     res.status(400).json({ error: err.message || 'Invalid lead data' });
//   }
// });

// // Update lead
//  router.put('/api/leads/:id', async (req, res) => {
//   try {
//     const updated = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(updated);
//   } catch (err) {
//     res.status(500).json({ message: 'Update failed', error: err.message });
//   }
// });


// // Delete lead
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedLead = await Lead.findByIdAndDelete(req.params.id);

//     if (!deletedLead) {
//       return res.status(404).json({ error: 'Lead not found' });
//     }

//     res.json({ message: 'Lead deleted successfully' });
//   } catch (err) {
//     console.error('Failed to delete lead:', err);
//     res.status(500).json({ error: 'Server error while deleting lead' });
//   }
// });

// export default router;
import express from 'express';
import Lead from '../models/Lead.js';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  try {
    const lead = new Lead(req.body);
    const savedLead = await lead.save();
    res.status(201).json(savedLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLead) return res.status(404).json({ message: 'Lead not found' });
    res.json(updatedLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id);
    if (!deletedLead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
