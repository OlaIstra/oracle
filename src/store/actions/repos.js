import * as actionTypes from "./actionTypes";
import axios from "../../shared/axios";

export const fetchReposStart = () => {
  return {
    type: actionTypes.FETCH_REPOS_START,
    loading: true
  };
};

export const fetchReposFailed = message => {
  return {
    type: actionTypes.FETCH_REPOS_FAILED,
    error: message,
    loading: false
  };
};

export const fetchReposSuccess = repos => {
  return {
    type: actionTypes.FETCH_REPOS_SUCCESS,
    repos: repos,
    loading: false
  };
};

export const initRepos = enteredText => {
  return dispatch => {
    dispatch(fetchReposStart());
    return axios
      .get(`/${enteredText}/repos`)
      .then(response => {
        dispatch(fetchReposSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchReposFailed(error.message));
      });
  };
};
