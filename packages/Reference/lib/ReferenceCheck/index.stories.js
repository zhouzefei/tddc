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
              type: "WEAK"
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
  name: "关联检查"
};