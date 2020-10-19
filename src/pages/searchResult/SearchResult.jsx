import React from 'react';
import './style.css';
import SearchHeader from './header/SearchHeader';

class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <SearchHeader
            content={this.props.match.params.content}
            history={this.props.history}
          />
          {/* 获取的传递过来的参数 */}
          {this.props.match.params.content}
        </h1>
      </div>
    );
  }
}

export default SearchResult;
