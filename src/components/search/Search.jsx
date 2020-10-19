import React from 'react';
import './style.css';

export default class Search extends React.Component {
  render() {
    const onKeyUp = (e) => {
      if (e.keyCode === 13) {
        // console.log(e.target.value);
        // console.log(this.props);
        // 这里的history是需要路有直接子元素传递，第一是从home主页传递，另外一个是从SearchResult进行传递
        this.props.history.push('/search/' + e.target.value);
      }
    };
    return (
      <div className="container">
        <i className="iconfont icon-search"></i>
        <input
          type="text"
          onKeyUp={onKeyUp}
          // value={this.props.value ? this.props.value : ''}
        />
      </div>
    );
  }
}
