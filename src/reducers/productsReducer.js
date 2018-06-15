import { REQUEST_API_DATA, RECEIVE_API_DATA } from '../constants/apiConstants'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants'

const defaultState = {
    products: [],
    cart: []
}

function productsReducer(previousState = defaultState,action){
    switch ( action.type ) {
      case RECEIVE_API_DATA: {
          const nextState = Object.assign( {}, previousState, {products: action.productsData.search_response.items.Item} )
          return nextState
      }
        break;

      case ADD_TO_CART: {
          const nextState = Object.assign( {}, previousState, {cart: [...previousState.cart,action.addedItem.dpci]} )
          return nextState
      }
        break;

      case REMOVE_FROM_CART: {
          let newCart = []
          previousState.cart.forEach((eachCartDpci)=>{
            if( eachCartDpci !== action.removedItem.dpci ) {
                newCart.push(eachCartDpci)
            }
          })
          const nextState = Object.assign( {}, previousState, {cart: newCart} )
          return nextState
      }
        break;

      default:
          return previousState
    }
}

export default productsReducer
