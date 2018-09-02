import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from './../../utils/injectReducer';
import injectSaga from './../../utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError
} from './../App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername, loadItems, onItemSelect, onItemCountChange, addItemsToOrder } from './actions';
import { makeSelectAllItems, makeSelectAllCustomers, makeSelectSelectedItem } from './selectors';
import reducer from './reducer';
import saga from './saga';
import OrderPage from './OrderPage';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  },
  loadItems: () => {dispatch(loadItems())},
  selectItem: (itemId)=> {dispatch(onItemSelect(itemId))},
  changeItemQty: (itemQty) => {dispatch(onItemCountChange(itemQty))},
  addItemToOrder: (itemId, itemQty) => {dispatch(addItemsToOrder(itemId, itemQty))}
});

const mapStateToProps = createStructuredSelector({
  items: makeSelectAllItems(),
  customers: makeSelectAllCustomers(),
  selectedItem: makeSelectSelectedItem(),

  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'order', reducer });
const withSaga = injectSaga({ key: 'order', saga });

export default compose(withReducer, withSaga, withConnect)(OrderPage);
export { mapDispatchToProps };

//
//
// export { default } from './OrderPage';
