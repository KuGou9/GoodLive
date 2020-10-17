import React from 'react';
import './style.css';

export default class Search extends React.Component {
  render() {
    const onKeyUp = (e) => {
      if (e.keyCode === 13) {
        // console.log(e.target.value);
        // console.log(this.props);
        this.props.history.push('/search/' + e.target.value);
      }
    };
    return (
      <div className="middle-container">
        <i className="iconfont icon-search"></i>
        <input type="text" onKeyUp={onKeyUp} />
      </div>
    );
  }
}
