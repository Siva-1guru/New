
import express from 'express';
import { Lead, Deal, Activity, Project, Document } from '../models/models.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find();
    const deals = await Deal.find();
    const activities = await Activity.find();
    const projects = await Project.find();
    const documents = await Document.findOne();

    res.json({ leads, deals, activities, projects, documents });
  } catch (error) {
    console.error('Error fetching report data:', error);
    res.status(500).json({ message: 'Error fetching report data' });
  }
});

export default router;
