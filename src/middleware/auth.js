const { verifyToken } = require('../config/jwt');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication token is required' });
  }

  const token = authHeader.split(' ')[1];
  const { valid, expired, decoded } = verifyToken(token);

  if (!valid) {
    return res.status(401).json({ 
      message: expired ? 'Token has expired' : 'Invalid token' 
    });
  }

  req.user = decoded;
  next();
};

module.exports = authenticate;
