import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

export const initialState = {
  repos: null,
  error: null,
  loading: false
};

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPOS_START:
      return updateObject(state, {
        loading: true
      });

    case actionTypes.FETCH_REPOS_SUCCESS:
      return updateObject(state, {
        repos: action.repos,
        error: null,
        loading: false
      });

    case actionTypes.FETCH_REPOS_FAILED:
      return updateObject(state, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
};
