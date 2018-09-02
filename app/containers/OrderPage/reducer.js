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

import { ITEM_LOADED, CUSTOMERS_LOADED, ITEM_SELECTED } from './constants';
import {items} from "./tests/Items";
import {customers} from "./tests/Items";
import {OrderModel, LineItemModel} from './model/Order.model'
import {getLineItemCount, getLineItems }from './model/OrderManager'
import _ from 'lodash';

// The initial state of the App
const initialState = fromJS({
  items: items,
  customers: fromJS([]),
  currentOrder: OrderModel()

});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_LOADED:
      return state.set('items', action.data);
    case CUSTOMERS_LOADED:
      return state.set('customers', action.data);
    case ITEM_SELECTED:
      const itemId = action.data;
      const selectedItem = state.get('items').filter((item) => item.get('id') === itemId);
      if (_.isEmpty(selectedItem)) {
        return state;
      }
      const lineItemCount = getLineItemCount(state.get('currentOrder'));
      return state;
    default:
      return state;
  }
}

export default homeReducer;
