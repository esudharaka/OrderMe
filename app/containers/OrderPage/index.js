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
import { changeUsername, loadItems } from './actions';
import { makeSelectAllItems } from './selectors';
import reducer from './reducer';
import saga from './saga';
import OrderPage from './OrderPage';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  },
  loadItems: () => {dispatch(loadItems())}
});

const mapStateToProps = createStructuredSelector({
  items: makeSelectAllItems(),
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
