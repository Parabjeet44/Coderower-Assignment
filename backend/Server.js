const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Configuration Schema
const configurationSchema = new mongoose.Schema({
  _id: String,
  configurationId: String,
  matrix: [[String]], // 2D array of strings
  remark: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Configuration = mongoose.model('Configuration', configurationSchema);

// Routes

// GET endpoint to fetch configuration by ID
app.get('/api/configurations/:id', async (req, res) => {
  try {
    const configId = req.params.id;
    
    // Find configuration by configurationId
    const config = await Configuration.findOne({ 
      $or: [
        { configurationId: configId },
        { _id: configId }
      ]
    });

    if (!config) {
      return res.status(404).json({ 
        error: 'Configuration not found',
        message: `No configuration found with ID: ${configId}`
      });
    }

    // Return the matrix (2D array)
    res.json(config.matrix || []);

  } catch (error) {
    console.error('Error fetching configuration:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message
    });
  }
});

// PUT endpoint to update remark
app.put('/api/configurations/:id', async (req, res) => {
  try {
    const configId = req.params.id;
    const { remark } = req.body;

    if (!remark) {
      return res.status(400).json({
        error: 'Bad request',
        message: 'Remark is required in request body'
      });
    }

    // Update the remark
    const updatedConfig = await Configuration.findOneAndUpdate(
      { 
        $or: [
          { configurationId: configId },
          { _id: configId }
        ]
      },
      { 
        remark: remark,
        updatedAt: new Date()
      },
      { new: true }
    );

    if (!updatedConfig) {
      return res.status(404).json({
        error: 'Configuration not found',
        message: `No configuration found with ID: ${configId}`
      });
    }

    res.json({ message: 'success' });

  } catch (error) {
    console.error('Error updating configuration:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});