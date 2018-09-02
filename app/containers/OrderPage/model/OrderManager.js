
import {OrderModel, LineItemModel} from './Order.model'
import _ from 'lodash';
const getLineItems = (order)=> {
  return order.get('lineItems');
};

const getLineItemCount = (order) => {
  return getLineItems(order).size;
};

const creteLineItem = (inputLineItem, { id,price,lineNo }) => {
  const lineItem = _.isUndefined(inputLineItem) ?  LineItemModel() : inputLineItem;
  const updatedLineItems = lineItem
          .set('itemId',id)
          .set('lineNo', lineNo)
          .set('itemPrice',price);
  return updatedLineItems;
}

export {
  getLineItems,
  getLineItemCount,
  creteLineItem,
}
