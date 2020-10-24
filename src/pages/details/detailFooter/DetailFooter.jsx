import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class DetailFooter extends React.Component {
  clickHander = (path) => {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/login');
    } else {
      this.props.history.push(path);
    }
  };
  render() {
    return (
      <div className="detail-footer">
        <ul className="footer-left">
          <li className="footer-item">
            <Link to="/dianpu">
              <i className="iconfont icon-shangcheng"></i>
              店铺
            </Link>
          </li>
          <li className="footer-item">
            <div onClick={this.clickHander.bind(this, '/cs')}>
              <i className="iconfont icon-kefu"></i>
              客服
            </div>
          </li>
          <li className="footer-item">
            <div onClick={this.clickHander.bind(this, '/mark')}>
              <i className="iconfont icon-shoucang"></i>
              收藏
            </div>
          </li>
          <li className="footer-button">
            <button className="btn1">加入购物车</button>
          </li>
          <li className="footer-button">
            <button className="btn2">立即购买</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default DetailFooter;
