import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from './../../utils/injectReducer';
import injectSaga from './../../utils/injectSaga';

import {
  changeEmail,
  changeFirstName,
  changeLastName,
  changePhone,
  changeShippingAddress,
  saveCustomer
} from './actions';
import { makeSelectCustomerInfo, selectCustomer } from './selectors';
import reducer from './reducer';
import saga from './saga';
import CustomerPage from './CustomerPage';

const mapDispatchToProps = (dispatch) => ({
  onChangeFirstName: (firstName) => dispatch(changeFirstName(firstName)),
  onChangeLastName: (lastName) => dispatch(changeLastName(lastName)),
  onChangeEmail: (email) => dispatch(changeEmail(email)),
  onChangePhone: (phone) => dispatch(changePhone(phone)),
  onChangeShippingAddress: (shippingAddress) => dispatch(changeShippingAddress(shippingAddress)),
  onSaveCustomer: (customerInfo) => {
    dispatch(saveCustomer(customerInfo));
  },

});

const mapStateToProps = createStructuredSelector({
  customerInfo: makeSelectCustomerInfo(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'customer', reducer });
const withSaga = injectSaga({ key: 'customer', saga });

export default compose(withReducer, withSaga, withConnect)(CustomerPage);
export { mapDispatchToProps };

