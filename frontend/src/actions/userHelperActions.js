import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, UPDATE_USER } from "./types";
import setAuthToken from "../setAuthToken";
import jwt_decode from "jwt-decode";

export const updateUser = (user, history) => dispatch => {
  axios
    .patch("/users/:id", user)
    .then(res => history.push("/homepage"))
    .catch(err => {
      dispatch({
        type: UPDATE_USER,
        payload: response.data
      });
    });
};
