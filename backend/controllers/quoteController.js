// controllers/quoteController.js
import Quote from '../models/Quote.js';

export const createQuote = async (req, res) => {
  try {
    const quote = new Quote(req.body);
    const saved = await quote.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
