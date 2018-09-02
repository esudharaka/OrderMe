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
import {fromJS} from 'immutable';

import {ITEM_LOADED, CUSTOMERS_LOADED, ITEM_SELECTED, ITEM_QTY_CHANGED, ADD_ITEMS_TO_ORDER} from './constants';
import {items} from "./tests/Items";
import {customers} from "./tests/Items";
import {OrderModel, LineItemModel} from './model/Order.model'
import {getLineItemCount, creteLineItem} from './model/OrderManager'
import _ from 'lodash';

// The initial state of the App
const initialState = fromJS({
  items: items,
  customers: fromJS([]),
  currentOrder: OrderModel(),
  selectedItem: LineItemModel(),
  selectedQty: 0

});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_LOADED:
      return state.set('items', action.data);
    case CUSTOMERS_LOADED:
      return state.set('customers', action.data);
    case ITEM_SELECTED:
      const itemId = action.data;
      const selectedItems = state.get('items').filter((item) => item.get('id') === itemId);
      const selectedLineItem = selectedItems.get(0);
      if (_.isEmpty(selectedLineItem)) {
        return state;
      }
      const lineItemCount = getLineItemCount(state.get('currentOrder'));
      const lineItem = creteLineItem(state.selectedItem, {...selectedLineItem.toJS(), lineNo: lineItemCount + 1});

      const currentLineItems = state.getIn(['currentOrder', 'lineItems']);
      return state.set('selectedItem', selectedLineItem)
        .setIn(['currentOrder', 'lineItems'], currentLineItems.push(lineItem));
    case ITEM_QTY_CHANGED:
      return state.set('selectedQty', action.data);
    case ADD_ITEMS_TO_ORDER: {
      const {qty, itemId} = action.data;
      if (qty === 0 || _.isEmpty(itemId)) {
        return state;
      }
      // TODO update the order item with the Qty
      return state;
    }
    default:
      return state;
  }
}


export default homeReducer;
