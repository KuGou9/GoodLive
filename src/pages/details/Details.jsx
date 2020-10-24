import React from 'react';
import './style.css';
import { connect } from 'react-redux';

import { getDetailData } from '../../redux/actions/detail';

import DetailHeader from '../../components/header/Header';
import Swiper from '../../components/swiper/Swiper';
import Footer from './detailFooter/DetailFooter';
import TabBar from '../../components/tabbar/TabBar';

class Detail extends React.Component {
  componentDidMount() {
    this.props.getDetailData();
  }
  render() {
    return (
      <div id="detail">
        <DetailHeader title="详情页面" />
        {this.props.data.images && <Swiper banners={this.props.data.images} />}
        <div className="name">{this.props.data.decr}</div>

        <div className="price">
          <div className="decr1">平方米</div>
          <div className="decr2">总价</div>
          <div className="price1">
            {this.props.data.price && this.props.data.price.price1}
          </div>
          <div className="price2">
            {this.props.data.price && this.props.data.price.price2}
          </div>
        </div>
        <TabBar>
          <div title="标题1" content="内容1"></div>
          <div title="标题2" content="内容2"></div>
        </TabBar>

        <Footer history={this.props.history} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.detail,
  };
};

export default connect(mapStateToProps, { getDetailData })(Detail);
