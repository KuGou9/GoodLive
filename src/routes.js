import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/home/Home'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const Life = lazy(() => import('./pages/life/life'));
const Me = lazy(() => import('./pages/me/Me'));

export default (
  <div>
    <Suspense fallback={<div>Loading……</div>}>
      <Route path="/" component={Home}></Route>
      <Route path="/shop" component={Shop}></Route>
      <Route path="/life" component={Life}></Route>
      <Route path="/me" component={Me}></Route>
    </Suspense>
  </div>
);
