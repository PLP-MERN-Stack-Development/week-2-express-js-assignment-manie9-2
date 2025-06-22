// filepath: /utils/productStats.js
const calculateStats = (products) => {
  return products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
};

module.exports = calculateStats;