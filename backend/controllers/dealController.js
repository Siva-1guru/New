// const Deal = require('../models/dealModel');

// // Controller to get all deals
// const getDeals = async (req, res) => {
//   try {
//     const deals = await Deal.find();
//     res.json(deals);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Controller to add a new deal
// const addDeal = async (req, res) => {
//   const { name, value, stage, date } = req.body;
  
//   if (!name || !value || !stage || !date) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const newDeal = new Deal({
//     name,
//     value,
//     stage,
//     date
//   });

//   try {
//     await newDeal.save();
//     res.status(201).json(newDeal);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Controller to update an existing deal
// const updateDeal = async (req, res) => {
//   try {
//     const deal = await Deal.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!deal) {
//       return res.status(404).json({ message: 'Deal not found' });
//     }
//     res.json(deal);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Controller to delete a deal
// const deleteDeal = async (req, res) => {
//   try {
//     const deal = await Deal.findByIdAndDelete(req.params.id);
//     if (!deal) {
//       return res.status(404).json({ message: 'Deal not found' });
//     }
//     res.json({ message: 'Deal deleted', deal });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { getDeals, addDeal, updateDeal, deleteDeal };
// backend/controllers/dealController.js
import Deal from '../models/dealModel.js';

// Controller to get all deals
export const getDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to add a new deal
export const addDeal = async (req, res) => {
  const { name, value, stage, date } = req.body;

  if (!name || !value || !stage || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newDeal = new Deal({ name, value, stage, date });

  try {
    await newDeal.save();
    res.status(201).json(newDeal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update an existing deal
export const updateDeal = async (req, res) => {
  try {
    const deal = await Deal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    res.json(deal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to delete a deal
export const deleteDeal = async (req, res) => {
  try {
    const deal = await Deal.findByIdAndDelete(req.params.id);
    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    res.json({ message: 'Deal deleted', deal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
