
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { OAuth2Client } from 'google-auth-library';

// // Routes
// import dealRoutes from './routes/dealRoutes.js';
// import authRoutes from './routes/authRoutes.js';
// import contactRoutes from './routes/contacts.js';
// import leadRoutes from './routes/leadRoutes.js';
// import taskRoutes from './routes/tasks.js';
// import meetingRoutes from './routes/meetings.js';
// import statsRoutes from './routes/stats.js';
// import callRoutes from './routes/callRoutes.js';
// import productRoutes from './routes/productRoutes.js';
// import quoteRoutes from './routes/quoteRoutes.js';
// import projectRoutes from './routes/projects.js';
// import documentRoutes from './routes/documentRoutes.js';
// import Reports from './routes/reportsRoutes.js';

// // Models
// import { Lead, Deal, Activity, Project, Document } from './models/models.js'; // Corrected import for models.js

// // Configure environment variables
// dotenv.config();
// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/crm', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('✅ MongoDB Connected'))
//   .catch(err => console.error('❌ MongoDB error:', err));

// // Google OAuth Client setup
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// app.post('/api/auth/google', async (req, res) => {
//   const { token } = req.body;
//   try {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID,
//     });
//     const payload = ticket.getPayload();
//     res.status(200).json({ user: payload });
//   } catch (err) {
//     res.status(401).json({ message: 'Invalid Token' });
//   }
// });

// // API Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/contacts', contactRoutes);
// app.use('/api/leads', leadRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/meetings', meetingRoutes);
// app.use('/api/stats', statsRoutes);
// app.use('/api/calls', callRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/deals', dealRoutes);
// app.use('/api/quotes', quoteRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/documents', documentRoutes);
// app.use('/api/reports', Reports);
 
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { OAuth2Client } from 'google-auth-library';

// Import routes
import dealRoutes from './routes/dealRoutes.js';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contacts.js';
import leadRoutes from './routes/leadRoutes.js';
import taskRoutes from './routes/tasks.js';
import meetingRoutes from './routes/meetings.js';
import statsRoutes from './routes/stats.js';
import callRoutes from './routes/callRoutes.js';
import productRoutes from './routes/productRoutes.js';
import quoteRoutes from './routes/quoteRoutes.js';
import projectRoutes from './routes/projects.js';
import documentRoutes from './routes/documentRoutes.js';
import reportsRoutes from './routes/reportsRoutes.js'; // fix naming convention to lowercase

// Configure environment variables
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection string from env or fallback
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/crm';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Google OAuth Client setup
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.post('/api/auth/google', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    res.status(200).json({ user: payload });
  } catch (err) {
    console.error('Google OAuth error:', err);
    res.status(401).json({ message: 'Invalid Token' });
  }
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/meetings', meetingRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/calls', callRoutes);
app.use('/api/products', productRoutes);
app.use('/api/deals', dealRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/reports', reportsRoutes);

// Root endpoint for health check
app.get('/', (req, res) => {
  res.send('CRM API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
