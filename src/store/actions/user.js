import * as actionTypes from "./actionTypes";
import axios from "../../shared/axios";

export const fetchUserStart = () => {
  return {
    type: actionTypes.FETCH_USER_START,
    loading: true
  };
};

export const fetchUserFailed = message => {
  return {
    type: actionTypes.FETCH_USER_FAILED,
    error: message,
    loading: false
  };
};

export const fetchUserSuccess = user => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    user: user,
    loading: false
  };
};

export const initUser = enteredText => {
  return dispatch => {
    dispatch(fetchUserStart());
    axios
      .get(`/${enteredText}`)
      .then(response => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};
