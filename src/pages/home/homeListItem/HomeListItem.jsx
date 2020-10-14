import React from 'react';
import './style.css';

class HomeListItem extends React.Component {
  render() {
    return (
      <div className="home-list-item">
        <a href={this.props.data.href}>
          <img src={this.props.data.image} alt="" className="item-image" />
          <div className="item-decr"></div>
          <p className="item-name">{this.props.data.decr}</p>

          <span className="price-decr">
            参考报价：
            <span className="item-price">{this.props.data.price1}</span>
            <p className="item-price">{this.props.data.price2}</p>
          </span>
        </a>
      </div>
    );
  }
}

export default HomeListItem;
