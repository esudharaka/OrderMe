/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import {selectGlobal} from "../App/selectors";

const selectOrder = (state) => state.get('order');


// my changes

const makeSelectAllItems = () => createSelector(
  selectOrder,
  (orderState) => orderState.get('items')
);

const makeSelectAllCustomers = () => createSelector(
  selectOrder,
  (orderState) => orderState.get('customers')
);

const makeSelectSelectedItem = () => createSelector(
  selectOrder,
  (orderState) => orderState.get('selectedItem')
);

const makeSelectSelectedQty = () => createSelector(
  selectOrder,
  (orderState) => orderState.get('selectedQty')
);

export {
  selectOrder,
  makeSelectAllItems,
  makeSelectAllCustomers,
  makeSelectSelectedItem,
};
