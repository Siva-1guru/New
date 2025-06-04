
// export default router; // Default export for ES Modules
import express from 'express';
import Product from '../models/Product.js'; // Ensure the path is correct

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
});

// Add a new product
router.post('/', async (req, res) => {
  const { title, description, price, image } = req.body;

  // Validation
  if (!title || !description || !price || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newProduct = new Product({ title, description, price, image });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct); // Send the saved product back to the client
  } catch (err) {
    res.status(500).json({ message: 'Error saving product', error: err.message });
  }
});

export default router;
