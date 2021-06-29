import { products } from '../../assets/db/products';
import { FILTER_PRODUCTS, ADD_TO_CART, REMOVE_ITEM, REMOVE_ONE_ITEM } from '../actions/products';

const productTypes = products.map(productInfo => {
  const productType = productInfo.type
  return { label: productType, value: productType }
})

const initialState = {
  products: products,
  filteredProducts: products,
  productTypes,
  cart: [],
}

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_PRODUCTS:
      const filteredProducts = state.products.filter(product => product.type === payload)
      return state = { ...state, filteredProducts }
    case ADD_TO_CART:
      let foundItem = state.cart.find(item => item.id === payload.id)
      let cart = [...state.cart]

      if (foundItem) {
        foundItem.count = foundItem.count + 1
      } else {
        payload.count = 1
        cart.push(payload)
      }

      return state = { ...state, cart }
    case REMOVE_ITEM:
      cart = state.cart.filter(item => item.id !== payload)
      return state = { ...state, cart }
    case REMOVE_ONE_ITEM:
      cart = state.cart.slice()
      foundItem = cart.find(item => item.id === payload)

      if (foundItem && foundItem.count > 1) {
        foundItem.count = foundItem.count - 1
      }

      return state = { ...state, cart }
    default:
      return state
  }
}

export default productsReducer;
