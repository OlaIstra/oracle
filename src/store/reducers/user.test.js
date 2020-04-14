import { userReducer, initialState } from "./user";
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

describe("userReducer", () => {
  it("should start loading", () => {
    const action = {
      type: actionTypes.FETCH_USER_START
    };
    expect(userReducer(initialState, action)).toEqual(
      updateObject(initialState, {
        loading: true
      })
    );
  });

  it("should store the user", () => {
    const action = {
      type: actionTypes.FETCH_USER_SUCCESS,
      user: {
        login: "login",
        id: 123,
        bio: "bio",
        img: "img"
      },
      loading: false
    };
    expect(userReducer({ ...initialState, loading: true }, action)).toEqual(
      updateObject(initialState, {
        user: {
          login: "login",
          id: 123,
          bio: "bio",
          img: "img"
        },
        error: null,
        loading: false
      })
    );
  });

  it("should store error", () => {
    const action = {
      type: actionTypes.FETCH_USER_FAILED,
      error: "error",
      loading: false
    };
    expect(userReducer({ ...initialState, loading: true }, action)).toEqual({
      user: null,
      loading: false,
      error: "error"
    });
  });
});
