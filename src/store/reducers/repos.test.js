import { reposReducer, initialState } from "./repos";
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utils";

describe("userReducer", () => {
  it("should start loading", () => {
    const action = {
      type: actionTypes.FETCH_REPOS_START
    };
    expect(reposReducer(initialState, action)).toEqual(
      updateObject(initialState, {
        loading: true
      })
    );
  });

  it("should store the user", () => {
    const action = {
      type: actionTypes.FETCH_REPOS_SUCCESS,
      repos: [1, 2, 3],
      loading: false
    };
    expect(reposReducer({ ...initialState, loading: true }, action)).toEqual(
      updateObject(initialState, {
        repos: [1, 2, 3],
        error: null,
        loading: false
      })
    );
  });

  it("should store error", () => {
    const action = {
      type: actionTypes.FETCH_REPOS_FAILED,
      error: "error",
      loading: false
    };
    expect(reposReducer({ ...initialState, loading: true }, action)).toEqual({
      repos: null,
      loading: false,
      error: "error"
    });
  });
});
