import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

const initialState = {
  user: null,
  error: null,
  loading: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_START:
      return updateObject(state, {
        loading: true
      });

    case actionTypes.FETCH_USER_SUCCESS:
      return updateObject(state, {
        user: {
          login: action.user.login,
          id: action.user.id,
          bio: action.user.bio,
          img: action.user.avatar_url
        },
        error: null,
        loading: false
      });

    case actionTypes.FETCH_USER_FAILED:
      return updateObject(state, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
};

export default user;
