const env = process.env.NODE_ENV;
const colors = require('colors');

console.log(`Loading application with ${env} configuration...`.bgBlue);

if (env === 'production') {
  var config = require('./prod.config.js');
} else if (env === 'development') {
  var config = require('./dev.config.js');
} else {
  var config = require('./test.config.js');
}

module.exports = config;
