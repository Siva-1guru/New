
import express from 'express'; // Use ES module imports
import Task from '../models/Task.js'; // Ensure to use .js extension for ES Modules

const router = express.Router();

// Create Task
router.post('/', async (req, res) => {
  try {
    // Create a new task instance with validation based on schema
    const task = new Task({
      subject: req.body.subject,
      dueDate: req.body.dueDate,
      contact: req.body.contact,
      account: req.body.account,
      status: req.body.status,
      priority: req.body.priority,
      reminder: req.body.reminder || false, // Default to false if no value is provided
    });
    
    await task.save(); // Save the task to the database
    res.status(201).json(task); // Return the newly created task
  } catch (error) {
    res.status(400).json({ error: error.message }); // Return error message if any
  }
});

// Get All Tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find(); // Fetch all tasks from the database
    res.json(tasks); // Return the tasks in the response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Return error if something goes wrong
  }
});

export default router; // Export the router using ES module export
