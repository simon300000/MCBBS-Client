"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _forumPanel = _interopRequireDefault(require("../utils/forumPanel"));

var _headImages = _interopRequireDefault(require("../utils/headImages"));

var _indexPageThreads = _interopRequireDefault(require("../utils/indexPageThreads"));

var _database = _interopRequireDefault(require("../../../localScripts/localDatabase/database"));

var _testData = _interopRequireDefault(require("../testData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = theme => ({
  padding: {
    padding: "8px"
  }
});

class MainPage extends _react.default.Component {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", null, _react.default.createElement(_headImages.default, {
      headImages: _testData.default.mainPage.headImages,
      className: classes.padding
    }), // TODO: 这里开始往 indexPageThreads 套接
    Object.keys(_testData.default.mainPage.forumGroups).map(n => _react.default.createElement(_forumPanel.default, {
      key: _testData.default.mainPage.forumGroups[n].forumGroupId,
      forumGroupName: _testData.default.mainPage.forumGroups[n].forumGroupName,
      forums: _testData.default.mainPage.forumGroups[n].forums
    })));
  }

}

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(MainPage);

exports.default = _default;