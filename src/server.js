const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

const connectDatabase = require('./config/database');
const logger = require('./utils/logger');
const swaggerSetup = require('./config/swagger');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

// Environment variables
dotenv.config();
require("dotenv").config();
console.log("✅ MONGO_URI:", process.env.MONGO_URI);

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('🔥 Backend Template Generator Çalışıyor! 🚀');
});
app.use(express.urlencoded({ extended: true }));

// Swagger Documentation
swaggerSetup(app);

// Connect to database
connectDatabase();

// Routes
app.use('/api', routes);

// Logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
