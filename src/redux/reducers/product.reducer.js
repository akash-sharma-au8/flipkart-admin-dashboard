import { productConstants } from "../actions/constants";

const initState = {
  products:[]
}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      return (state = {
        ...state,
        products: action.payload.products
      });
    default:
      return state
  }
}

export default productReducer