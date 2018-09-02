/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { saveCustomerCompleted } from './actions';
import { SAVE_CUSTOMER } from './constants'
import {API_URL, API_USER_PATH} from './../../constants'

import request from 'utils/request';
import { makeSelectCustomerInfo } from './selectors';

export function* doSaveCustomer() {
  const customerInfo = yield select(makeSelectCustomerInfo());
  const requestURL = `${API_URL}${API_USER_PATH}`;
  const options = {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: customerInfo.get('firstName'),
        lastName: customerInfo.get('lastName'),
        email: customerInfo.get('email'),
        phone: customerInfo.get('phone'),
        shippingAddress: customerInfo.get('shippingAddress')
      })
    };

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL, options);
    yield put(saveCustomerCompleted( { data: repos}));
    alert('Customer added successfully')
  } catch (err) {
    // TODO dispatch error action
    // yield put(saveCustomerCompleted({ error: err}));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* saveCustomer() {
  yield takeLatest(SAVE_CUSTOMER, doSaveCustomer);
}
