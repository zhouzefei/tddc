"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceDrawer = void 0;

require("antd/es/drawer/style");

var _drawer = _interopRequireDefault(require("antd/es/drawer"));

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ReferenceInfo = require("../ReferenceInfo");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ReferenceDrawer = function ReferenceDrawer(props) {
  var fetchReference = props.fetchReference,
      _props$data = props.data,
      data = _props$data === void 0 ? null : _props$data,
      visible = props.visible,
      onClose = props.onClose,
      title = props.title,
      _props$orgMap = props.orgMap,
      orgMap = _props$orgMap === void 0 ? {} : _props$orgMap,
      _props$appList = props.appList,
      appList = _props$appList === void 0 ? [] : _props$appList;

  var _useState = (0, _react.useState)(data),
      _useState2 = _slicedToArray(_useState, 2),
      referenceData = _useState2[0],
      setReferenceData = _useState2[1];

  var _useState3 = (0, _react.useState)(!data),
      _useState4 = _slicedToArray(_useState3, 2),
      referenceLoad = _useState4[0],
      setReferenceLoad = _useState4[1];

  (0, _react.useEffect)(function () {
    if (visible && fetchReference) {
      fetchReference().then(function (res) {
        if (res != null && res.success && res != null && res.data) {
          setReferenceData((res == null ? void 0 : res.data) || null);
        }
      })["finally"](function () {
        setReferenceLoad(false);
      });
    }
  }, [visible, fetchReference]);
  return /*#__PURE__*/React.createElement(_drawer["default"], {
    className: "reference-drawer",
    width: 650,
    onClose: onClose,
    visible: visible,
    title: /*#__PURE__*/React.createElement(_tooltip["default"], {
      title: title
    }, title || '')
  }, referenceLoad && /*#__PURE__*/React.createElement(_spin["default"], {
    className: "globalSpin",
    tip: "\u67E5\u8BE2\u4E2D..."
  }), !referenceLoad && /*#__PURE__*/React.createElement("div", {
    className: "drawer-reference-body"
  }, /*#__PURE__*/React.createElement(_ReferenceInfo.ReferenceInfo, {
    referenceData: referenceData || [],
    appList: appList || [],
    orgMap: orgMap || {}
  })));
};

exports.ReferenceDrawer = ReferenceDrawer;
ReferenceDrawer.propTypes = {
  title: _propTypes["default"].string,
  data: _propTypes["default"].array,
  visible: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  fetchReference: _propTypes["default"].func,
  orgMap: _propTypes["default"].object,
  appList: _propTypes["default"].array
};
ReferenceDrawer.defaultProps = {
  title: "",
  data: null,
  visible: false,
  orgMap: {},
  appList: []
};