
// // Default export for ES Modules
// export default router;
import express from 'express'; // ES module import
import Stats from '../models/Stats.js'; // Correctly import the Stats model with ES module syntax

const router = express.Router();

// GET stats
router.get('/', async (req, res) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = new Stats();
      await stats.save();
    }
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT stats (update)
router.put('/', async (req, res) => {
  try {
    let stats = await Stats.findOne();
    if (!stats) {
      stats = new Stats(req.body);
    } else {
      stats.set(req.body);
    }
    await stats.save();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Default export for ES Modules
export default router;
