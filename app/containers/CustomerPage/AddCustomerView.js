import React from 'react';
import {Helmet} from 'react-helmet';
import {changeFirstName, changeLastName, changeShippingAddress} from "./actions";
// import './style.scss';

export default class AddCustomerView extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // onChangeFirstName: (firstName) => dispatch(changeFirstName(firstName)),
  // onChangeLastName: (lastName) => dispatch(changeLastName(lastName)),
  // onChangeEmail: (email) => dispatch(changeEmail(email)),
  // onChangePhone: (phone) => dispatch(changePhone(phone)),
  // onChangeShippingAddress:

  render() {
    const {properties} = this.props;
    const {
      onChangeFirstName, customerInfo, onChangeLastName, onChangeEmail, onChangePhone,
      onChangeShippingAddress, onSaveCustomer
    } = properties;
    return (
      <div className="container">
        <h2>Customer</h2>
        <div className="form-group">
          <label htmlFor="usr">Name:</label>
          <input type="text" value={customerInfo.firstName} className="form-control" id="usr" onChange={
            ({target: {value}}) => {
              onChangeFirstName(value)
            }
          }/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Last Name:</label>
          <input type="text" value={customerInfo.lastName} className="form-control" id="pwd"
                 onChange={({target: {value}}) => {
                   onChangeLastName(value)
                 }}/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Email:</label>
          <input type="text" value={customerInfo.email} className="form-control" id="pwd"
                 onChange={({target: {value}}) => {
                   onChangeEmail(value)
                 }}/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Phone</label>
          <input type="text" value={customerInfo.phone} className="form-control" id="pwd"
                 onChange={({target: {value}}) => {
                   onChangePhone(value)
                 }}/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Shipping Address</label>
          <input type="text" value={customerInfo.shippingAddress} className="form-control" id="pwd"
                 onChange={({target: {value}}) => {
                   onChangeShippingAddress(value)
                 }}/>
        </div>
        <button type="text" className="btn btn-primary" onClick={() => onSaveCustomer(customerInfo)}>Save customer
        </button>
      </div>
    );
  }
}
