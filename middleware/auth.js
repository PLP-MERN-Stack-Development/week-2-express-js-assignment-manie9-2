// filepath: /middleware/auth.js
const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== 'your-secret-key') {
    return res.status(403).send('Forbidden: Invalid API Key');
  }
  next();
};

module.exports = auth;