"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ReferenceCheckTemplate = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

var _index2 = _interopRequireDefault(require("./index.mdx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: '关联引用/关联检查',
  component: _index.ReferenceCheck,
  parameters: {
    docs: {
      page: _index2["default"]
    }
  }
};
exports["default"] = _default;

var ReferenceCheckTemplate = function ReferenceCheckTemplate() {
  var confirmClick = function confirmClick() {
    (0, _index.ReferenceCheck)({
      rq: function rq() {
        return new Promise(function (resolve) {
          resolve({
            success: true,
            data: {
              type: 'WEAK',
              result: [{
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
                  name: '策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A',
                  code: 'policy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phone',
                  version: 'v2',
                  org: 'TongDun',
                  app: 'TEST',
                  goLink: 'noah/policyManage?currentTab=2&uuid=policy_phone'
                }],
                tips: '注意流模式策略判断体现在过程判断的适配的字段',
                title: '被应用策略【运行区】'
              }]
            }
          });
        });
      },
      appList: []
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_button["default"], {
    onClick: confirmClick
  }, "\u5173\u8054\u68C0\u67E5");
};

exports.ReferenceCheckTemplate = ReferenceCheckTemplate;
ReferenceCheckTemplate.story = {
  name: '关联检查'
};