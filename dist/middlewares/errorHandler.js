'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var errorHandler = function errorHandler(err, req, res) {
  var _err$status = err.status,
      status = _err$status === undefined ? 500 : _err$status,
      _err$message = err.message,
      message = _err$message === undefined ? 'Internal server error' : _err$message;


  res.status(status).json(message);
};

exports.default = errorHandler;