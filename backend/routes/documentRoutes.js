
// routes/documentRoutes.js
import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import Document from '../models/Document.js';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Upload a file
router.post('/', upload.single('file'), async (req, res) => {
  const { file } = req;
  const newDoc = new Document({
    name: file.originalname,
    size: (file.size / 1024).toFixed(2) + ' KB',
    type: file.mimetype,
    url: `${process.env.BASE_URL || 'http://localhost:5000'}/uploads/${file.filename}`,
    uploadedOn: new Date().toLocaleString(),
  });
  await newDoc.save();
  res.status(201).json(newDoc);
});

// Get all documents
router.get('/', async (req, res) => {
  const docs = await Document.find().sort({ _id: -1 });
  res.json(docs);
});

// Delete document
router.delete('/:id', async (req, res) => {
  const doc = await Document.findById(req.params.id);
  if (!doc) return res.status(404).send('Not found');

  const filePath = path.join(__dirname, '..', 'uploads', doc.url.split('/uploads/')[1]);
  fs.unlinkSync(filePath);
  await doc.deleteOne();
  res.sendStatus(204);
});

export default router;
