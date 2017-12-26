const config = {
  port: process.env.PORT || 5000,
  database: process.env.MONGO || 'mongodb://127.0.0.1:27017/u-night-prod',
};

module.exports = config;
