
import { Record, List } from 'immutable';
export const OrderModel = Record({
  id: null,
  customerId: null,
  shippingAddress: '',
  createdAt: null,
  updatedAt: null,
  lineItems: List()
});


export const  LineItemModel = Record({
  id: null,
  orderId: null,
  itemId: '',
  lineNo: null,
  qty: null,
  itemPrice: null,
});


