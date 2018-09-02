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

export {
  selectOrder,
  makeSelectAllItems,
};
