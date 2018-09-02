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

import { ITEM_LOADED, CUSTOMERS_LOADED } from './constants';
import {items} from "./tests/Items";
import {customers} from "./tests/Items";

// The initial state of the App
const initialState = fromJS({
  items: items,
  customers: customers,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_LOADED:
      return state.set('items', action.data);
    case CUSTOMERS_LOADED:
      return state.set(customers, action.data);
    default:
      return state;
  }
}

export default homeReducer;
