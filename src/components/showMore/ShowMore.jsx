import React from 'react';

export default class ShowMore extends React.Component {
  componentWillMount() {
    const ref = React.createRef();
    this.setState({
      loading: ref,
    });
  }
  componentDidMount() {
    console.log('上拉加载组件加载完成');
    //   获取到当前这个上拉加载的组件
    console.log(this.state.loading.current);
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    //   获取到整个屏幕的高度
    // const clientHeight = document.documentElement.clientHeight;
    // console.log(clientHeight);
    //   获取到上拉加载更多的元素高度
    if (this.state.loading.current !== null) {
      let showMoreHeight = this.state.loading.current.getBoundingClientRect()
        .top;
      // console.log(showMoreHeight);
      //   使用防抖
      let timer = null;
      if (showMoreHeight < 530) {
        if (timer) {
          clearTimeout(timer);
        }
        console.log('需要加载更多');
        timer = setTimeout(() => {
          console.log('执行网络请求');
        }, 1000);
      }
    }
  };
  render() {
    return (
      <div ref={this.state.loading}>
        <h3>加载更多</h3>
      </div>
    );
  }
}
