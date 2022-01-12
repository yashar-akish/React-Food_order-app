// creating context to have access to data from every where 
// first step:

import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;

// second step: creating provider to manage accessing to data 'cart-provider'