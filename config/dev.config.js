const config = {
  port: process.env.PORT || '8000',
  database: process.env.MONGO || 'mongodb://127.0.0.1:27017/u-night-dev',
  facebook: {
    clientID: '127001757972141',
    clientSecret: 'edf82e1ec65206637eb9dc74b4d7d790',
  },
};

module.exports = config;
