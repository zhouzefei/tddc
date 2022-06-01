"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceOnlineCheck = void 0;

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

require("antd/es/tag/style");

var _tag = _interopRequireDefault(require("antd/es/tag"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/collapse/style");

var _collapse = _interopRequireDefault(require("antd/es/collapse"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _tntd = require("tntd");

var _ReferenceInfo = require("../ReferenceInfo");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Panel = _collapse["default"].Panel;

var ReferenceOnlineCheck = function ReferenceOnlineCheck(props) {
  var _ref = props || {},
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '上线校验' : _ref$title,
      rq = _ref.rq,
      checkReferResponse = _ref.checkReferResponse,
      _ref$orgMap = _ref.orgMap,
      orgMap = _ref$orgMap === void 0 ? {} : _ref$orgMap,
      _ref$appList = _ref.appList,
      appList = _ref$appList === void 0 ? [] : _ref$appList,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? undefined : _ref$value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;

  var appendModal = function appendModal(resolve) {
    var referenceData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var modalWrap = document.createElement('div');
    modalWrap.setAttribute("id", "tddc-reference-online-check-modal");

    var removeModal = function removeModal() {
      var _modalWrap$parentNode;

      var tddcModal = document.querySelectorAll("#tddc-reference-online-check-modal");

      if (tddcModal) {
        tddcModal.forEach(function (ele) {
          var _ele$parentNode;

          return ele == null ? void 0 : (_ele$parentNode = ele.parentNode) == null ? void 0 : _ele$parentNode.removeChild(ele);
        });
      }

      modalWrap && (modalWrap == null ? void 0 : (_modalWrap$parentNode = modalWrap.parentNode) == null ? void 0 : _modalWrap$parentNode.removeChild(modalWrap));
    };

    removeModal();

    _reactDom["default"].render( /*#__PURE__*/React.createElement(_tntd.Modal, {
      title: title,
      visible: true,
      width: 1000,
      destroyOnClose: true,
      getContainer: modalWrap,
      onCancel: removeModal,
      footer: [/*#__PURE__*/React.createElement(_button["default"], {
        key: "back",
        onClick: removeModal
      }, "\u53D6\u6D88")]
    }, /*#__PURE__*/React.createElement("div", {
      className: "reference-online-check-modal"
    }, /*#__PURE__*/React.createElement(_collapse["default"], {
      defaultActiveKey: value || [0],
      onChange: onChange
    }, referenceData == null ? void 0 : referenceData.map(function (d, i) {
      var headerTxt = d == null ? void 0 : d.componentName;

      if (d != null && d.componentCode) {
        headerTxt += "[".concat(d == null ? void 0 : d.componentCode, "]");
      }

      return /*#__PURE__*/React.createElement(Panel, {
        header: /*#__PURE__*/React.createElement("div", {
          className: "refer-panel-head"
        }, /*#__PURE__*/React.createElement(_tooltip["default"], {
          title: headerTxt,
          placement: "topLeft"
        }, /*#__PURE__*/React.createElement("span", null, headerTxt)), (d == null ? void 0 : d.componentVersion) && /*#__PURE__*/React.createElement(_tag["default"], {
          color: "green"
        }, "V", d == null ? void 0 : d.componentVersion)),
        key: i
      }, /*#__PURE__*/React.createElement(_ReferenceInfo.ReferenceInfo, {
        unmountHandle: removeModal,
        referenceData: (d == null ? void 0 : d.result) || [],
        orgMap: orgMap,
        appList: appList
      }));
    })))), modalWrap);

    document.body.appendChild(modalWrap);
  };

  if (rq && typeof rq === 'function') {
    return new Promise(function (resolve, reject) {
      return rq().then(function (res) {
        var _ref2 = res || {},
            success = _ref2.success,
            data = _ref2.data;

        if (success) {
          if (!!(data != null && data.length)) {
            appendModal(resolve, data);
          } else {
            resolve(data);
          }
        } else {
          reject('查询关联关系失败');
        }
      });
    });
  } else {
    _message2["default"].error('请提供一个可靠的查询请求!!!');
  }
};

exports.ReferenceOnlineCheck = ReferenceOnlineCheck;