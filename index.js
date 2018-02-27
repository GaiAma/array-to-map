'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(array) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "id";
  return new Map(array.map(function (item) {
    return [item[property], item];
  }));
};

exports.default = _default;
