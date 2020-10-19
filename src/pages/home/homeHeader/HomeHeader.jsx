import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Search from '../../../components/search/Search';

class HomeHeader extends React.Component {
  render() {
    return (
      <div id="home-header">
        <Link to="/city">
          <div className="home-header-left">
            {this.props.currentCity}
            <i className="iconfont icon-jiantouarrow483"></i>
          </div>
        </Link>
        <div className="home-header-middle">
          <Search history={this.props.history} />
        </div>
        <div className="home-header-right">
          <i className="iconfont icon-car"></i>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
