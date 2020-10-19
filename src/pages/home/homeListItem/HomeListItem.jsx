import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class HomeListItem extends React.Component {
  render() {
    return (
      <div className="home-list-item">
        <Link to="/detail">
          <img src={this.props.data.image} alt="" className="item-image" />
          <div className="item-decr"></div>
          <p className="item-name">{this.props.data.decr}</p>

          <span className="price-decr">
            参考报价：
            <span className="item-price">{this.props.data.price1}</span>
            <p className="item-price">{this.props.data.price2}</p>
          </span>
        </Link>
      </div>
    );
  }
}

export default HomeListItem;
