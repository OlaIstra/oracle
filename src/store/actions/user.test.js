import {
  fetchUserStart,
  fetchUserFailed,
  fetchUserSuccess,
  initUser
} from "./user";
import * as actionTypes from "./actionTypes";
import configureMockStore from "redux-mock-store";
import axios from "../../shared/axios";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock-jest";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("user actions", () => {
  it("should create an action to set loading: true", () => {
    const expectedAction = {
      type: actionTypes.FETCH_USER_START,
      loading: true
    };
    expect(fetchUserStart()).toEqual(expectedAction);
  });

  it("should create an action to set user", () => {
    const expectedAction = {
      type: actionTypes.FETCH_USER_SUCCESS,
      user: "user",
      loading: false
    };
    expect(fetchUserSuccess("user")).toEqual(expectedAction);
  });

  it("should create an action to set error", () => {
    const expectedAction = {
      type: actionTypes.FETCH_USER_FAILED,
      error: "error",
      loading: false
    };
    expect(fetchUserFailed("error")).toEqual(expectedAction);
  });

  describe("async action init user", () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it("creates FETCH_USER_SUCCESS when fetching is done", () => {
      fetchMock.getOnce(`${axios}/user`, {
        headers: { "content-type": "application/json" }, // описываем заголовки ответа
        body: { data: "user", status: "ok" }
      });

      const expectedActions = [
        {
          type: actionTypes.FETCH_USER_START,
          loading: true
        },
        {
          type: actionTypes.FETCH_USER_SUCCESS,
          user: {
            bio: "~/.local/bin",
            id: 14959,
            img: "https://avatars2.githubusercontent.com/u/14959?v=4",
            login: "user"
          },
          loading: false // в ожидании важно указать теже данные, что были указаны выше в моке запроса
        }
      ];
      const store = mockStore({});

      return store.dispatch(initUser("user")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
