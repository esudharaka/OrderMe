import React from 'react';
import { Link } from 'react-router-dom';
// import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header" align="center">
        <h1 align="center">Shopping App</h1>
        <div className="nav-bar">
          <Link type="button" className="btn btn-info" to="/order">
            <button type="button" className="btn btn-info">Orders</button>
          </Link>
          <Link type="button" className="btn btn-info" to="/customer">
            <button type="button" className="btn btn-info">Customers</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
