import React from 'react';
import './style.css';

class HomeHeader extends React.Component {
  render() {
    return (
      <div id="home-header">
        <div className="home-header-left">
          北京
          <i className="iconfont icon-jiantouarrow483"></i>
        </div>
        <div className="home-header-middle">
          <div className="middle-container">
            <i className="iconfont icon-search"></i>
            <input type="text" />
          </div>
        </div>
        <div className="home-header-right">
          <i className="iconfont icon-car"></i>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
