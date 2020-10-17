import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as city from '../../../../redux/actions/city';

class CityList extends React.Component {
  clickCity(cityName) {
    // console.log(cityName);
    // console.log(this.props);
    // 将所有的actions全部封装到对象cityActions中，所以多一重
    this.props.cityActions.setCity(cityName);
    // 返回上一级
    window.history.back(-1);
  }
  render() {
    return (
      <div>
        <span className="title">热门城市</span>
        <ul className="city-list">
          <li className="city-item" onClick={this.clickCity.bind(this, '北京')}>
            北京
          </li>
          <li className="city-item" onClick={this.clickCity.bind(this, '上海')}>
            上海
          </li>
          <li className="city-item" onClick={this.clickCity.bind(this, '广州')}>
            广州
          </li>
          <li className="city-item" onClick={this.clickCity.bind(this, '深圳')}>
            深圳
          </li>
          <li className="city-item" onClick={this.clickCity.bind(this, '杭州')}>
            杭州
          </li>
          <li className="city-item" onClick={this.clickCity.bind(this, '长沙')}>
            长沙
          </li>
          <li className="city-item" onClick={this.clickCity.bind(this, '珠海')}>
            珠海
          </li>
          <li className="city-item" onClick={this.clickCity.bind(this, '武汉')}>
            武汉
          </li>
          <li className="city-item" onClick={this.clickCity.bind(this, '海南')}>
            海南
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cityActions: bindActionCreators(city, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(CityList);
