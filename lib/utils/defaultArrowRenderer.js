"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = arrowRenderer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return _react2.default.createElement("span", {
		className: "Select-arrow",
		onMouseDown: onMouseDown
	});
};