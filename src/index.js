import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/index';
// 使用actions时，要配置同步redux-logger异步redux-thunk这个中间件
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// 没有这个插件，浏览器的redux插件无法进行显示
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import './static/icons/iconfont.css';
import NavBar from './components/navbar/NavBar';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}>
      <NavBar />
      {/* 要解析，不解析不作用 */}
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
