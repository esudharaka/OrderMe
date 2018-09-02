/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import {selectGlobal} from "../App/selectors";

const selectCustomer = (state) => state.get('customer');


// my changes

const makeSelectCustomerInfo = () => createSelector(
  selectCustomer,
  (customerState) => customerState.get('customerInfo')
);

export {
  selectCustomer,
  makeSelectCustomerInfo,
};
