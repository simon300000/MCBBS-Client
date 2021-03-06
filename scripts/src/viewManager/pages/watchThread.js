import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import WebviewRender from "../../../localScripts/localWebView/webviewRender";
import Floor from "../utils/floor";

import db from "../../../localScripts/localDatabase/database";

import testData from "../testData";

const styles = theme => ({
  title: {
    padding: '12px'
  }
});

class Thread extends React.Component {
  state = {
    title: "加载中...",
    author: "",
    topIcons: [],
    posts: [],
    users: []
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h6" color="inherit" className={classes.title}>
          {this.state.title}
        </Typography>
        <WebviewRender url={"http://www.mcbbs.net/thread-" + this.props.thread + "-1-1.html"} />
        {
          this.state.posts.forEach((n, id) => (
          <Floor
            key={n}
            className={classes.floor}
            accountAvatar={this.state.users[n.author].avatar}
            accountName={this.state.users[n.author].name}
            accountInfo={
              testData.userGroup[
                this.state.users[n.author].userGroup
              ].name
            }
            contentTimeInfo={"发布于 " + n.createTime}
            contentFloor={id + 1}
            content={n.content}
            reply
            rate
            edit
          />
        ))}
      </div>
    );
  }
}

Thread.propTypes = {
  classes: PropTypes.object.isRequired,
  thread: PropTypes.number
};

export default withStyles(styles)(Thread);
