// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const logger = require('./middleware/logger'); // Correct path to logger.js
const auth = require('./middleware/auth'); // Correct path to auth.js
const validateProduct = require('./middleware/validateProduct'); // Correct path to validateProduct.js
const errorHandler = require('./middleware/errorHandler'); // Correct path to errorHandler.js

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());

app.use(logger);
app.use(auth);


// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];


// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product


// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling


// Middleware setup
app.use(bodyParser.json());
app.use(logger);
app.use(auth);

// Routes
app.use('/api/products', productRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Export the app for testing purposes
module.exports = app;

