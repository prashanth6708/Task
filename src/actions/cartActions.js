import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants'

export const addToCart = addedItem =>({ type: ADD_TO_CART, addedItem });
export const removeFromCart = removedItem =>({ type: REMOVE_FROM_CART,removedItem });
