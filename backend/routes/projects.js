
// module.exports = router;
import express from 'express';
const router = express.Router();
import Project from '../models/Project.js';  // Ensure to use .js extension for ES Modules

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new project
router.post('/', async (req, res) => {
  const { name, client, status, deadline, priority, description } = req.body;
  const newProject = new Project({
    name,
    client,
    status,
    deadline,
    priority,
    description,
  });

  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a project by ID
router.put('/:id', async (req, res) => {
  const { name, client, status, deadline, priority, description } = req.body;
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { name, client, status, deadline, priority, description },
      { new: true }
    );
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a project by ID
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;  // Using default export for ES Modules
