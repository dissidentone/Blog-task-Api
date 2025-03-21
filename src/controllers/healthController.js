const getHealth = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is running',
    time: new Date().toISOString()
  });
};

module.exports = {
  getHealth
};
