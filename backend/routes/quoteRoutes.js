// routes/quoteRoutes.js
import express from 'express';
import { createQuote, getAllQuotes } from '../controllers/quoteController.js';

const router = express.Router();

router.post('/', createQuote);
router.get('/', getAllQuotes);

export default router;
