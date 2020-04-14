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
    return axios
      .get(`/${enteredText}`)
      .then(response => {
        dispatch(
          fetchUserSuccess({
            login: response.data.login,
            id: response.data.id,
            bio: response.data.bio,
            img: response.data.avatar_url
          })
        );
      })
      .catch(error => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};
