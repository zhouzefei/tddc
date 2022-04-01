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

var _ReferenceInfo = require("../ReferenceInfo");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReferenceCheck = function ReferenceCheck(props) {
  var _ref = props || {},
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '引用关系查看' : _ref$title,
      rq = _ref.rq,
      checkReferResponse = _ref.checkReferResponse,
      _ref$orgMap = _ref.orgMap,
      orgMap = _ref$orgMap === void 0 ? {} : _ref$orgMap,
      _ref$appList = _ref.appList,
      appList = _ref$appList === void 0 ? [] : _ref$appList,
      _ref$weakMsg = _ref.weakMsg,
      weakMsg = _ref$weakMsg === void 0 ? '存在弱引用关系，谨慎操作' : _ref$weakMsg,
      _ref$strongMsg = _ref.strongMsg,
      strongMsg = _ref$strongMsg === void 0 ? '存在强引用关系，禁止操作' : _ref$strongMsg;

  var appendModal = function appendModal(resolve, _ref2) {
    var type = _ref2.type,
        _ref2$result = _ref2.result,
        referenceData = _ref2$result === void 0 ? [] : _ref2$result;
    var modalWrap = document.createElement('div');

    var removeModal = function removeModal() {
      modalWrap && modalWrap.parentNode.removeChild(modalWrap);
    };

    _reactDom["default"].render( /*#__PURE__*/React.createElement(_modal["default"], {
      title: title,
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
          removeModal();
          resolve(type);
        }
      }, "\u4E0B\u4E00\u6B65")]
    }, type === 'WEAK' && /*#__PURE__*/React.createElement("div", {
      className: "mb10"
    }, /*#__PURE__*/React.createElement(_alert["default"], {
      type: "warning",
      message: weakMsg || '存在弱引用关系，谨慎操作'
    })), type === 'STRONG' && /*#__PURE__*/React.createElement("div", {
      className: "mb10"
    }, /*#__PURE__*/React.createElement(_alert["default"], {
      type: "error",
      message: strongMsg || '存在强引用关系，禁止操作'
    })), /*#__PURE__*/React.createElement("div", {
      className: "relation-reference-detail"
    }, /*#__PURE__*/React.createElement(_ReferenceInfo.ReferenceInfo, {
      referenceData: [{
        columns: [{
          title: '策略名称',
          dataIndex: 'name'
        }, {
          title: '策略标识',
          dataIndex: 'code'
        }, {
          title: '策略名称',
          dataIndex: 'version'
        }, {
          title: '所属机构',
          dataIndex: 'org'
        }, {
          title: '所属应用',
          dataIndex: 'app'
        }],
        goName: 'code',
        rows: [{
          name: '策略A',
          code: 'policy_phone',
          version: 'v2',
          org: 'TongDun',
          app: 'TEST',
          goLink: 'noah/policyManage?currentTab=2&uuid=policy_phone'
        }],
        tips: '注意流模式策略判断体现在过程判断的适配的字段',
        title: '被应用策略【运行区】'
      }],
      orgMap: orgMap,
      appList: appList,
      unmountHandle: removeModal
    }))), modalWrap);

    document.body.appendChild(modalWrap);
  };

  if (rq && typeof rq === 'function') {
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
    _message2["default"].error('请提供一个可靠的查询请求!!!');
  }
};

exports.ReferenceCheck = ReferenceCheck;