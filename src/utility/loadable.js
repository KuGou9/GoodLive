// 实现路由懒加载

import React from 'react';
// laodable只需写一次，改变的只是组件的引入方式
// react-loadable是以组件级别来分割代码的，这意味着，我们不仅可以根据路由按需加载，还可以根据组件按需加载，使用方式和路由分割一样，只用修改组件的引入方式即可
import Loadable from 'react-loadable';

// 通过的过场组件
const loadingComponent = () => {
  return <div>Loading</div>;
};

// 过场组件默认采用通过的，如果传入了loading，则采用传入的过场组件
export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader: loader,
    loading: loading,
  });
};
