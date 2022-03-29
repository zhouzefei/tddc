"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceDrawer = void 0;

require("antd/es/drawer/style");

var _drawer = _interopRequireDefault(require("antd/es/drawer"));

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _react = require("react");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    width: 650 // closable={false}
    ,
    onClose: function onClose() {},
    visible: visible || true,
    bodyStyle: {
      padding: 0
    }
  }, referenceLoad && /*#__PURE__*/React.createElement(_spin["default"], {
    className: "globalSpin",
    tip: "\u67E5\u8BE2\u4E2D..."
  }), !referenceLoad && /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
    className: "drawer-reference-title"
  }, /*#__PURE__*/React.createElement(_tooltip["default"], {
    title: title
  }, title || '')), /*#__PURE__*/React.createElement("div", {
    className: "drawer-reference-body"
  }, referenceData == null ? void 0 : referenceData.map(function (d, dIndex) {
    var _renderColumns;

    var _ref = d || {},
        columns = _ref.columns,
        goName = _ref.goName;

    var renderColumns = [];

    if (columns != null && columns.length) {
      renderColumns = columns == null ? void 0 : columns.map(function (c, i) {
        var newC = _objectSpread(_objectSpread({}, c), {}, {
          width: 140,
          ellipsis: true
        });

        newC.render = function (t, record) {
          var content = t;

          if (c.dataIndex === 'org') {
            var _orgMap$t;

            content = ((_orgMap$t = orgMap[t]) == null ? void 0 : _orgMap$t.name) || t;
          }

          if (c.dataIndex === 'app') {
            var _appList$find;

            content = ((_appList$find = appList.find(function (a) {
              return a.key === t;
            })) == null ? void 0 : _appList$find.name) || t;
          }

          if (c.dataIndex === goName) {
            content = /*#__PURE__*/React.createElement("a", {
              href: record == null ? void 0 : record.goLink
            }, t);
          }

          return /*#__PURE__*/React.createElement(_tooltip["default"], {
            title: t
          }, content);
        };

        if (i === (columns == null ? void 0 : columns.length) - 1) {
          newC.fixed = 'right';
        }

        return newC;
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "reference-body-item"
    }, /*#__PURE__*/React.createElement(_row["default"], {
      className: "reference-body-title",
      type: "flex",
      align: "middle"
    }, /*#__PURE__*/React.createElement("span", {
      className: "body-title-content"
    }, /*#__PURE__*/React.createElement(_tooltip["default"], {
      title: d == null ? void 0 : d.title,
      placement: "topLeft"
    }, d == null ? void 0 : d.title)), (d == null ? void 0 : d.tips) && /*#__PURE__*/React.createElement(_tooltip["default"], {
      title: d == null ? void 0 : d.tips,
      placement: "topLeft"
    }, /*#__PURE__*/React.createElement(_icon["default"], {
      type: "info-circle"
    }))), ((_renderColumns = renderColumns) == null ? void 0 : _renderColumns.length) && /*#__PURE__*/React.createElement(_table["default"], {
      bordered: false,
      dataSource: d == null ? void 0 : d.rows,
      columns: renderColumns,
      pagination: false,
      scroll: {
        x: renderColumns.length * 140
      },
      rowKey: function rowKey(e, i) {
        return "".concat(dIndex, "_").concat(i);
      }
    }));
  }))));
};

exports.ReferenceDrawer = ReferenceDrawer;