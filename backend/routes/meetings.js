
// module.exports = router;
import express from 'express';
import Meeting from '../models/Meeting.js';  // Ensure you're using the correct path and file extension

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.json(meetings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newMeeting = new Meeting(req.body);
    const savedMeeting = await newMeeting.save();
    res.status(201).json(savedMeeting);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Export the router as default
export default router;
