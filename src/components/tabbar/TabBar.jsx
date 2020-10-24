import React from 'react';
import './style.css';

export default class TabBar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }

  check_item_index(index) {
    return index === this.state.currentIndex
      ? 'content-active'
      : 'content-hide';
  }

  check_title_index(index) {
    return index === this.state.currentIndex ? 'title-active' : 'title';
  }

  change_index = (index) => {
    this.setState({
      currentIndex: index,
    });
  };

  render() {
    return (
      <div className="tabbar">
        {React.Children.map(this.props.children, (element, index) => {
          //   console.log(element.props.content);
          return (
            <div className="tabbar-item">
              <div
                className={this.check_title_index(index)}
                onClick={this.change_index.bind(this, index)}
              >
                {element.props.title}
              </div>
              <div className={this.check_item_index(index)}>
                {element.props.content}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
