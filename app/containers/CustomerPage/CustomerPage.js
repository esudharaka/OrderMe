/*
 * CustomerPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Modal from 'react-modal';
import AddCustomerView from './AddCustomerView';
// import './style.scss';

export default class CustomerPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Customer Page</title>
          <meta
            name="description"
            content="Customer page"
          />
        </Helmet>
        <div className="container">
          <AddCustomerView properties={this.props}/>
        </div>
      </div>
    );
  }
}
