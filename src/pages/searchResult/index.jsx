import React from 'react';

class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <h1>
          SearchResult
          {/* 获取的传递过来的参数 */}
          {this.props.match.params.content}
        </h1>
      </div>
    );
  }
}

export default SearchResult;
