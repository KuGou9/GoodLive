import React from 'react';
import HomeListtItem from '../homeListItem/HomeListItem';
import './style.css';

class HomeList extends React.Component {
  render() {
    return (
      <div className="home-list">
        {this.props.data.map((element, index) => {
          return <HomeListtItem data={element} key={index} />;
        })}
      </div>
    );
  }
}

export default HomeList;
