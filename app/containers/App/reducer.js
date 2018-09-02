/*
 * AppReducer
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

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  SHOW_MODAL,
  HIDE_MODAL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  modalInfo: {
    modalIsOpen: false,
    afterOpenModal: ()=>{},
    closeModal: ()=> {},
    style: {}
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true);
    case LOAD_REPOS_SUCCESS:
      return state
        .set('loading', false);
    case LOAD_REPOS_ERROR:
      return state
        .set('loading', false);
    case SHOW_MODAL:
      // return state.set('modalInfo', action.modelInfo);
    case HIDE_MODAL:
      // const {isVisible} = action;
      // return state.set('modalInfo', initialState.modalInfo);
    default:
      return state;
  }
}

export default appReducer;
