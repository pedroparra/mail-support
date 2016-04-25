'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _css = require('css');

var _css2 = _interopRequireDefault(_css);

var _android = require('../data/android.json');

var _android2 = _interopRequireDefault(_android);

var _apple = require('../data/apple.json');

var _apple2 = _interopRequireDefault(_apple);

var _gmail = require('../data/gmail.json');

var _gmail2 = _interopRequireDefault(_gmail);

var _ios = require('../data/ios.json');

var _ios2 = _interopRequireDefault(_ios);

var _outlook_express = require('../data/outlook_express.json');

var _outlook_express2 = _interopRequireDefault(_outlook_express);

var _outlook_web = require('../data/outlook_web.json');

var _outlook_web2 = _interopRequireDefault(_outlook_web);

var _outlook = require('../data/outlook.json');

var _outlook2 = _interopRequireDefault(_outlook);

var _yahoo = require('../data/yahoo.json');

var _yahoo2 = _interopRequireDefault(_yahoo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Data


var data = {
  android: _android2.default,
  apple: _apple2.default,
  gmail: _gmail2.default,
  ios: _ios2.default,
  outlook_express: _outlook_express2.default,
  outlook_web: _outlook_web2.default,
  outlook: _outlook2.default,
  yahoo: _yahoo2.default
};

var clients_supported = ['android', 'apple', 'gmail', 'ios', 'outlook', 'outlook_web', 'outlook_express', 'yahoo'];

var validator = function validator() {
  var property = arguments.length <= 0 || arguments[0] === undefined ? 'error' : arguments[0];

  var validator_info = {};
  clients_supported.map(function (client) {
    validator_info[client] = data[client][property] || {
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
