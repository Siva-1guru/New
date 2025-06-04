
// dealRoutes.js (ES Module style)
import express from 'express';
import { getDeals, addDeal, updateDeal, deleteDeal } from '../controllers/dealController.js';

const router = express.Router();

router.get('/', getDeals);
router.post('/', addDeal);
router.put('/:id', updateDeal);
router.delete('/:id', deleteDeal);

export default router; // ✅ Fix: default export
