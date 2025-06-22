// filepath: /middleware/validateProduct.js
const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || !price || !category || inStock === undefined) {
    return res.status(400).send('Validation Error: Missing required fields');
  }
  next();
};

module.exports = validateProduct;