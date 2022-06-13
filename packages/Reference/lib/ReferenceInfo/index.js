"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceInfo = void 0;

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/empty/style");

var _empty = _interopRequireDefault(require("antd/es/empty"));

var _tntd = require("tntd");

var _AHref = _interopRequireDefault(require("../AHref"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReferenceInfo = function ReferenceInfo(props) {
  var from = props.from,
      _props$referenceData = props.referenceData,
      referenceData = _props$referenceData === void 0 ? [] : _props$referenceData,
      _props$orgMap = props.orgMap,
      orgMap = _props$orgMap === void 0 ? {} : _props$orgMap,
      _props$appList = props.appList,
      appList = _props$appList === void 0 ? [] : _props$appList,
      _props$description = props.description,
      description = _props$description === void 0 ? '' : _props$description,
      unmountHandle = props.unmountHandle,
      _props$imageStyle = props.imageStyle,
      imageStyle = _props$imageStyle === void 0 ? {} : _props$imageStyle;
  return /*#__PURE__*/React.createElement("div", {
    className: "reference-body"
  }, !(referenceData != null && referenceData.length) && /*#__PURE__*/React.createElement(_empty["default"], {
    description: description || '暂无数据',
    image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
    imageStyle: _objectSpread({
      marginTop: 120
    }, imageStyle)
  }), referenceData == null ? void 0 : referenceData.map(function (d, dIndex) {
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

        var fixedMaxWid = {};

        if (i === (columns == null ? void 0 : columns.length) - 1) {
          if ((columns == null ? void 0 : columns.length) > 4) {
            newC.fixed = 'right';
            fixedMaxWid = {
              widthLimit: 108
            };
          }
        }

        if (i === 0) {
          newC.width = 180;
        }

        if (from === 'ReferenceOnlineCheck' && c.dataIndex === 'status') {
          newC.className = 'refer-warning-txt';
        }

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

          if (c.dataIndex === goName && record != null && record.goLink) {
            return /*#__PURE__*/React.createElement(_AHref["default"], {
              href: record == null ? void 0 : record.goLink,
              target: "_blank",
              unmountHandle: unmountHandle
            }, /*#__PURE__*/React.createElement(_tntd.Ellipsis, _extends({
              placement: "topLeft"
            }, fixedMaxWid), content || '- -'));
          }

          if (c.dataIndex === goName) {
            return /*#__PURE__*/React.createElement(_tntd.Ellipsis, _extends({
              placement: "topLeft",
              copyable: true
            }, fixedMaxWid), content || '- -');
          }

          if (i === 0 && record != null && record.referenceCheckType) {
            var checkObj;

            if ((record == null ? void 0 : record.referenceCheckType) === 'WEAK') {
              checkObj = {
                name: '弱引用',
                className: 'refer-tag-weak'
              };
            }

            if ((record == null ? void 0 : record.referenceCheckType) === 'STRONG') {
              checkObj = {
                name: '强引用',
                className: 'refer-tag-strong'
              };
            }

            return /*#__PURE__*/React.createElement(_tooltip["default"], {
              placement: "topLeft",
              title: content
            }, checkObj && /*#__PURE__*/React.createElement("span", {
              className: "refer-tag ".concat(checkObj.className)
            }, checkObj.name), content || '- -');
          }

          return /*#__PURE__*/React.createElement(_tntd.Ellipsis, _extends({
            placement: "topLeft"
          }, fixedMaxWid), content || '- -');
        };

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
      type: "info-circle",
      className: "ml-6"
    }))), ((_renderColumns = renderColumns) == null ? void 0 : _renderColumns.length) && /*#__PURE__*/React.createElement(_table["default"], {
      className: "reference-table",
      bordered: false,
      dataSource: d == null ? void 0 : d.rows,
      columns: renderColumns,
      pagination: false,
      scroll: {
        x: (renderColumns.length - 1) * 140 + 40
      },
      rowKey: function rowKey(e, i) {
        return "".concat(dIndex, "_").concat(i);
      }
    }));
  }));
};

exports.ReferenceInfo = ReferenceInfo;