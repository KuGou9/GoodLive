import React from 'react';
import './style.css';

export default class Header extends React.Component {
  clickBackHandler() {
    /**
     * 返回到上一级
     *    window是最合适的返回
     *    this.props.history.push('/home)
     *    this.props.history.repalce('/home)
     */
    window.history.back(-1);
  }
  render() {
    return (
      <div className="common-header">
        <div className="back-icon" onClick={this.clickBackHandler}>
          <i className="iconfont icon-back"></i>
        </div>
        <span className="header-title">{this.props.title}</span>
      </div>
    );
  }
}
