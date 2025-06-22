const express = require('express');
const { v4: uuidv4 } = require('uuid');
const calculateStats = require('../utils/stats'); 
const router = express.Router();

let products = [
  { id: '1', name: 'Laptop', description: 'High-performance laptop', price: 1200, category: 'electronics', inStock: true },
  { id: '2', name: 'Smartphone', description: '128GB storage', price: 800, category: 'electronics', inStock: true },
  { id: '3', name: 'Coffee Maker', description: 'Programmable coffee maker', price: 50, category: 'kitchen', inStock: false }
];

// GET /api/products - Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET /api/products/:id - Get a specific product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

// POST /api/products - Create a new product
router.post('/', (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const product = { id: uuidv4(), name, description, price, category, inStock };
  products.push(product);
  res.status(201).json(product);
});

// PUT /api/products/:id - Update a product
router.put('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).send('Product not found');
  Object.assign(product, req.body);
  res.json(product);
});

// DELETE /api/products/:id - Delete a product
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).send('Product not found');
  products.splice(index, 1);
  res.status(204).send();
});

// Filtering by category
router.get('/', (req, res) => {
  const { category } = req.query;
  const filteredProducts = category
    ? products.filter(p => p.category === category)
    : products;
  res.json(filteredProducts);
});

// Pagination
router.get('/', (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  res.json(products.slice(startIndex, endIndex));
});

// Search by name
router.get('/search', (req, res) => {
  const { name } = req.query;
  const results = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  res.json(results);
});

// Product statistics
router.get('/stats', (req, res) => {
  const stats = calculateStats(products);
  res.json(stats);
});


module.exports = router;
