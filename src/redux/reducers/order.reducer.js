import { orderConstants } from "../actions/constants";

const initState = {
  orders: [],
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
      return(state = {
        ...state,
        orders: action.payload.orders,
      })
  }

  return state;
};

export default orderReducer;