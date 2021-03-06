import { UPDATE_USER } from "../actions/types";
const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
        user: action.payload
      };
    default:
      return state;
  }
}
