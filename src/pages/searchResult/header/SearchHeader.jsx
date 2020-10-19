import React from 'react';
import './style.css';
import Search from '../../../components/search/Search';

class SearchHeader extends React.Component {
  onClick() {
    window.history.back(-1);
  }
  render() {
    return (
      <div id="search-header">
        <div className="search-header-left" onClick={this.onClick}>
          <i className="iconfont icon-back"></i>
        </div>
        <div className="search-header-middle">
          <Search history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default SearchHeader;
