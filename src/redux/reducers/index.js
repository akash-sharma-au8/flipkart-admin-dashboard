import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from './userReducer'
import categoryReducer from './category.reducer';
import orderReducer from './order.reducer'
import productReducer from './product.reducer'
import pageReducer from './page.reducer';

const rootReducer = combineReducers({
  authState: authReducer,
  userState: userReducer,
  categoryState: categoryReducer,
  orderState: orderReducer,
  productState: productReducer,
  pageState: pageReducer
});

export default rootReducer;