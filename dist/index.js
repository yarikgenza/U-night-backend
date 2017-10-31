'use strict';

require('app-module-path/cwd');

var _config = require('config');

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_server2.default.listen(_config.port, function () {
  console.log('listening at ' + _config.port + '...');
});