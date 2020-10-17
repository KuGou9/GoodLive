import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('./pages/home/Home'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const Life = lazy(() => import('./pages/life/life'));
const Me = lazy(() => import('./pages/me/Me'));
const SearchResult = lazy(() => import('./pages/searchResult/index'));

const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const City = lazy(() => import('./pages/home/city/City'));

export default (
  <div>
    <Suspense fallback={<div>Loading……</div>}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/life" component={Life}></Route>
        <Route path="/me" component={Me}></Route>

        <Route path="/city" component={City}></Route>
        <Route path="/search/:content" component={SearchResult}></Route>

        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Suspense>
  </div>
);
