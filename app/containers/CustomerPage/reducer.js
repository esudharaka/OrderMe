/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_FIRST_NAME, CHANGE_LAST_NAME, CHANGE_EMAIL, CHANGE_PHONE,
  CHANGE_SHIPPING_ADDRESS, SAVE_CUSTOMER, COMPLETE_SAVE_CUSTOMER } from './constants';

// The initial state of the App
const initialState = fromJS({
  customerInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shippingAddress: ''
  },
  loading: false,
});

function customerReducer(state = initialState, payload) {
  const {type, data} = payload;
  switch (type) {
    case CHANGE_FIRST_NAME:
      return state.setIn(['customerInfo', 'firstName'], data.firstName);
    case CHANGE_LAST_NAME:
      return state.setIn(['customerInfo', 'lastName'], data.lastName);
    case CHANGE_EMAIL:
      return state.setIn(['customerInfo', 'email'], data.email);
    case CHANGE_PHONE:
      return state.setIn(['customerInfo', 'phone'], data.phone);
    case CHANGE_SHIPPING_ADDRESS:
      return state.setIn(['customerInfo', 'shippingAddress'], data.shippingAddress);
    case SAVE_CUSTOMER:
      return state.set('loading', true);
    case COMPLETE_SAVE_CUSTOMER:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default customerReducer;
