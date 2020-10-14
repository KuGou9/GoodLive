import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="navbar">
          <li className="navbar-item">
            {/* 会根据路径来进行高亮，是一种特殊的Link */}
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: '#f73131',
              }}
            >
              <i className="iconfont icon-home1"></i>
              首页
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/shop"
              activeStyle={{
                color: '#f73131',
              }}
            >
              <i className="iconfont icon-shangcheng"></i>
              商城
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/life"
              activeStyle={{
                color: '#f73131',
              }}
            >
              <i className="iconfont icon-shenghuo"></i>
              生活服务
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/me"
              activeStyle={{
                color: '#f73131',
              }}
            >
              <i className="iconfont icon-wode2"></i>
              我的
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
