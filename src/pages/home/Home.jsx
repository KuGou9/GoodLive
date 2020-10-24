import React from 'react';
import './style.css';
import NavBar from '../../components/navbar/NavBar';
import HomeHeader from './homeHeader/HomeHeader';
import Swiper from '../../components/swiper/Swiper';
import img1 from '../../static/img/room1.jpg';
import img2 from '../../static/img/room2.jpg';
import { connect } from 'react-redux';
import { getHomeData } from '../../redux/actions/home';
import HomeList from './homeList/HomeList';
import ShowMore from '../../components/showMore/ShowMore';

class Home extends React.Component {
  componentDidMount() {
    this.props.getHomeData();
  }
  render() {
    return (
      <div id="home">
        <NavBar />
        <HomeHeader
          currentCity={this.props.currentCity}
          history={this.props.history}
        />
        <Swiper banners={[img1, img2]} />
        <HomeList data={this.props.homeData} />
        <ShowMore />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //  这里的home代表的是reducer的文件名字
    homeData: state.home,
    currentCity: state.currentCity,
  };
};

export default connect(mapStateToProps, { getHomeData })(Home);
