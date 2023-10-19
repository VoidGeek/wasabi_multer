// app.js
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const app = express();

// Load environment variables from .env
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error);

// Middleware
app.use(express.json());

// Routes
app.use('/', postRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
