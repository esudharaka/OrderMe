const getLineItems = (order)=> {
  return order.get('lineItems');
};

const getLineItemCount = (order) => {
  return getLineItems(order).size;
};

export {
  getLineItems,
  getLineItemCount,
}
