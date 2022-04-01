"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _excluded = ["children", "href", "unmountHandle"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = function _default(props) {
  var children = props.children,
      href = props.href,
      unmountHandle = props.unmountHandle,
      rest = _objectWithoutProperties(props, _excluded);

  if (window.__isMultiTab__) {
    return /*#__PURE__*/React.createElement("a", {
      onClick: function onClick(evt) {
        evt.preventDefault();

        if (unmountHandle && typeof unmountHandle === "function") {
          unmountHandle();
        }

        window.push(href);
      }
    }, children);
  }

  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, rest), children);
};

exports["default"] = _default;