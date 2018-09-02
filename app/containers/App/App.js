/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import CustomerPage from 'containers/CustomerPage/Loadable';
import OrderPage from 'containers/OrderPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
// import './style.scss';

const App = () => (
  <div>
    <Header />
    <Switch classname="btn-group">
      <Route exact path="/" component={HomePage} />
      <Route type="button" className="btn btn-primary" path="/customer" component={CustomerPage} />
      <Route type="button" className="btn btn-primary" path="/order" component={OrderPage} />
      <Route type="button" className="btn btn-primary" path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
