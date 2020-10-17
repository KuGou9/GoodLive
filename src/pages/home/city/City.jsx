import React from 'react';
import './style.css';
import CityHeader from './cityHeader/CityHeader';
import CurrentCity from './currentCity/index';
import CityList from './cityList/CityList';
import { connect } from 'react-redux';

class City extends React.Component {
  render() {
    return (
      <div>
        <CityHeader title="城市选择" />
        <CurrentCity city={this.props.currentCity} />
        <CityList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCity: state.currentCity,
  };
};

export default connect(mapStateToProps)(City);
