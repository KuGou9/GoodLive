import React from 'react';
import './style.css';

class DetailFooter extends React.Component {
  render() {
    return (
      <div className="detail-footer">
        <ul className="footer-left">
          <li className="footer-item">
            <a href="#">
              <i className="iconfont icon-shangcheng"></i>
              店铺
            </a>
          </li>
          <li className="footer-item">
            <a href="#">
              <i className="iconfont icon-kefu"></i>
              客服
            </a>
          </li>
          <li className="footer-item">
            <a href="#">
              <i className="iconfont icon-shoucang"></i>
              收藏
            </a>
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
