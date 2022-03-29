"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceCheck = void 0;

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/alert/style");

var _alert = _interopRequireDefault(require("antd/es/alert"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ReferenceInfo = require("../ReferenceInfo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReferenceCheck = function ReferenceCheck(props) {
  var _ref = props || {},
      rq = _ref.rq,
      _ref$orgMap = _ref.orgMap,
      orgMap = _ref$orgMap === void 0 ? {} : _ref$orgMap,
      _ref$appList = _ref.appList,
      appList = _ref$appList === void 0 ? [] : _ref$appList;

  var appendModal = function appendModal(resolve, _ref2) {
    var type = _ref2.type,
        _ref2$result = _ref2.result,
        referenceData = _ref2$result === void 0 ? [] : _ref2$result;
    var modalWrap = document.createElement('div');

    var removeModal = function removeModal() {
      modalWrap && modalWrap.parentNode.removeChild(modalWrap);
    };

    _reactDom["default"].render( /*#__PURE__*/React.createElement(_modal["default"], {
      title: "\u5173\u8054\u5F15\u7528\u67E5\u770B",
      visible: true,
      width: 1000,
      destroyOnClose: true,
      getContainer: modalWrap,
      onCancel: removeModal,
      footer: [/*#__PURE__*/React.createElement(_button["default"], {
        key: "back",
        onClick: removeModal
      }, "\u53D6\u6D88"), type === 'WEAK' && /*#__PURE__*/React.createElement(_button["default"], {
        key: "submit",
        type: "primary",
        onClick: function onClick() {
          resolve(type);
        }
      }, "\u4E0B\u4E00\u6B65")]
    }, type === 'WEAK' && /*#__PURE__*/React.createElement(_alert["default"], {
      type: "warning",
      message: "\u5B58\u5728\u5F31\u5F15\u7528\u5173\u7CFB\uFF0C\u8C28\u614E\u64CD\u4F5C"
    }), type === 'STRONG' && /*#__PURE__*/React.createElement(_alert["default"], {
      type: "error",
      message: "\u5B58\u5728\u5F3A\u5F15\u7528\u5173\u7CFB\uFF0C\u7981\u6B62\u64CD\u4F5C"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relation-reference-detail"
    }, /*#__PURE__*/React.createElement(_ReferenceInfo.ReferenceInfo, {
      referenceData: referenceData,
      orgMap: orgMap,
      appList: appList
    }))), modalWrap);

    document.body.appendChild(modalWrap);
  };

  if (rq && typeof rq === "function") {
    return new Promise(function (resolve, reject) {
      return rq().then(function (res) {
        var _ref3 = res || {},
            success = _ref3.success,
            data = _ref3.data;

        if (success) {
          var _ref4 = data || {},
              type = _ref4.type;

          if (type === 'NO_EXIST') {
            resolve(type);
          }

          if (['WEAK', 'STRONG'].includes(type)) {
            appendModal(resolve, data);
          }
        } else {
          reject('查询关联关系失败');
        }
      });
    });
  } else {
    _message2["default"].error("请提供一个可靠的查询");
  }
};

exports.ReferenceCheck = ReferenceCheck;
ReferenceCheck.propTypes = {
  rq: _propTypes["default"].func,
  orgMap: _propTypes["default"].object,
  appList: _propTypes["default"].array
};
ReferenceCheck.defaultProps = {
  orgMap: {},
  appList: []
};