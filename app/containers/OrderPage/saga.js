import {call, put, select, takeLatest, takeEvery} from 'redux-saga/effects';
import {reposLoaded, repoLoadingError, loadRepos} from './../App/actions';

import request from 'utils/request';
import {makeSelectUsername} from 'containers/HomePage/selectors';
import {ADD_ITEMS_TO_ORDER, LOAD_ORDER_PAGE} from './constants'
import {API_URL, API_ITEM_PATH, API_USERS_PATH} from "../../constants";
import {itemsLoaded, customersLoaded} from './actions'
import _ from 'lodash';
import {fromJS} from "immutable";

/**
 * Github repos request/response handler
 */
export function* loadOrderPageData() {

  yield put(loadRepos());
  const ITEMS_GET_ALL_URL = `${API_URL}${API_ITEM_PATH}`;
  const USERS_GET_ALL_URL = `${API_URL}${API_USERS_PATH}`;
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  try {
    const {items} = yield call(request, ITEMS_GET_ALL_URL, options);
    const {users} = yield call(request, USERS_GET_ALL_URL, options);


    const updatedItems = fromJS(mapApiItemsToViewItems(items));
    const updatedUsers = fromJS(mapApiUsersToViewUsers(users));
    yield put(itemsLoaded(updatedItems));
    yield put(customersLoaded(updatedUsers));

    yield put(reposLoaded());
  } catch (err) {
    yield put(repoLoadingError());

  }
}


const mapApiItemsToViewItems = (apiItems) => {
  const updatedItems = _.map(apiItems, (item) => {
    const mappedItem = {
      id: item.ID,
      name: item.ITEM_NAME,
      price: item.PRICE,
      isActive: item.IS_ACTIVE
    };
    return mappedItem;
  });
  return updatedItems
};

const mapApiUsersToViewUsers = (apitUsers) => {
  const mappedUsers = _.map(apitUsers, (user) => {
    const mappedUser = {
      id: user.ID,
      firstName: user.FIRST_NAME,
      lastName: user.LAST_NAME,
      email: user.EMAIL,
      phone: user.PHONE,
      shippingAddress: user.SHIPPING_ADDRESS
    };
    return mappedUser;
  });
  return mappedUsers
};


/**
 * Root saga manages watcher lifecycle
 */
export default function* loadItems() {
  yield takeLatest(LOAD_ORDER_PAGE, loadOrderPageData);
}

