'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _config = require('config');

var _errorHandler = require('./middlewares/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

_mongoose2.default.connect(_config.database, {
  useMongoClient: true,
  promiseLibrary: _bluebird2.default
}, function () {
  console.log('Connected to db: ' + _config.database);
});

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _morgan2.default)('tiny'));

app.get('/hello', function (req, res) {
  res.status(200).json({ message: 'hello' });
});

app.use(_errorHandler2.default);

exports.default = app;