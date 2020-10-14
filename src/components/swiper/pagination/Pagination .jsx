import React from 'react';
import './style.css';

class Pagination extends React.Component {
  render() {
    // 虽然获取到了数据，但是不能通过for循环，因为for循环没有返回值
    const dots = this.props.dots;
    const dotsArr = new Array(dots).fill(1);
    const currentIndex = this.props.index;
    return (
      <div className="swiper-pagination">
        <ul>
          {dotsArr.map((element, index) => {
            return (
              <li
                key={index}
                className={currentIndex === index ? 'selected' : ''}
              ></li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Pagination;
