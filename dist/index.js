'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _css = require('css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clients_supported = ['android', 'apple', 'gmail', 'ios', 'outlook', 'outlook_web', 'outlook_express', 'yahoo'];

var validator = function validator() {
  var property = arguments.length <= 0 || arguments[0] === undefined ? 'error' : arguments[0];

  var validator_info = {};
  clients_supported.map(function (client) {
    validator_info[client] = _data2.default[client][property] || {
      test: "warning",
      info: "Property not found in data"
    };
  });
  return validator_info;
};

var template = function template() {
  var line = arguments.length <= 0 || arguments[0] === undefined ? 'error' : arguments[0];
  var property = arguments.length <= 1 || arguments[1] === undefined ? 'error' : arguments[1];

  return {
    line: line,
    property: property,
    clients: validator(property)
  };
};

exports.default = function (file) {

  // Read file
  var FILECSS = _fs2.default.readFileSync(file).toString();

  // Parser file and get css properties
  var bufferCssProperties = [];
  var obj = _css2.default.parse(FILECSS);
  obj.stylesheet.rules.map(function (rules) {
    rules.declarations.map(function (declaration) {
      return bufferCssProperties.push(declaration);
    });
  });

  // Test properties
  var result = bufferCssProperties.map(function (prop) {
    return template(prop.position.start.line, prop.property);
  });

  return result;
};
