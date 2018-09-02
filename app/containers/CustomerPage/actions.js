/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_FIRST_NAME, CHANGE_LAST_NAME, CHANGE_PHONE, CHANGE_EMAIL,
  CHANGE_SHIPPING_ADDRESS, SAVE_CUSTOMER, COMPLETE_SAVE_CUSTOMER } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeFirstName(name) {
  return {
    type: CHANGE_FIRST_NAME,
    data: {
      firstName: name,
    }
  };
};

export const changeLastName = (name) =>{
  return {
    type: CHANGE_LAST_NAME,
    data: {
      lastName: name,
    }
  };
};

export const changeEmail = (email) => {
  return {
    type: CHANGE_EMAIL,
    data: {
      email: email,
    }
  };
};

export const changePhone = (phone) => {
  return {
    type: CHANGE_PHONE,
    data: {
      phone: phone,
    }
  };
};

export const changeShippingAddress = (shippingAddress) => {
  return {
    type: CHANGE_SHIPPING_ADDRESS,
    data: {
      shippingAddress: shippingAddress,
    }
  };
};

export const saveCustomer = (customerInfo) => {
  return {
    type: SAVE_CUSTOMER,
    data: customerInfo
  };
};


export const saveCustomerCompleted = ({data, error}) => {
  return {
    type: COMPLETE_SAVE_CUSTOMER,
    data: data,
    error: error
  };
};
