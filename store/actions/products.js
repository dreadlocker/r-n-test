const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const REMOVE_ONE_ITEM = 'REMOVE_ONE_ITEM';

const filterProducts = (payload) => ({ type: FILTER_PRODUCTS, payload })
const addToCart = (payload) => ({ type: ADD_TO_CART, payload })
const deleteItem = (payload) => ({ type: REMOVE_ITEM, payload })
const removeOneItem = (payload) => ({ type: REMOVE_ONE_ITEM, payload })

export {
  FILTER_PRODUCTS,
  ADD_TO_CART,
  REMOVE_ITEM,
  REMOVE_ONE_ITEM,
  filterProducts,
  addToCart,
  deleteItem,
  removeOneItem,
}
