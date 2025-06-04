
// module.exports = router;
import express from 'express';
import Call from '../models/Call.js'; // make sure the file exists and has export default

const router = express.Router();

// Create a call
router.post('/', async (req, res) => {
  try {
    const call = await Call.create(req.body);
    res.status(201).json(call);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all calls
router.get('/', async (req, res) => {
  try {
    const calls = await Call.find().sort({ createdAt: -1 });
    res.json(calls);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a call
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Call.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
