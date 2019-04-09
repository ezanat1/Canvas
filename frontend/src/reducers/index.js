import errorReducer from "./errorReducers";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
export default combineReducers({
  errors: errorReducer,
  auth: authReducer
});
