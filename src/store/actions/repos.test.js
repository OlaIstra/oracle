import {
  fetchReposStart,
  fetchReposFailed,
  fetchReposSuccess,
  initRepos
} from "./repos";
import * as actionTypes from "./actionTypes";
import configureMockStore from "redux-mock-store";
import axios from "../../shared/axios";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock-jest";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("repos actions", () => {
  it("should create an action to set loading: true", () => {
    const expectedAction = {
      type: actionTypes.FETCH_REPOS_START,
      loading: true
    };
    expect(fetchReposStart()).toEqual(expectedAction);
  });

  it("should create an action to set user", () => {
    const expectedAction = {
      type: actionTypes.FETCH_REPOS_SUCCESS,
      repos: [1, 2, 3],
      loading: false
    };
    expect(fetchReposSuccess([1, 2, 3])).toEqual(expectedAction);
  });

  it("should create an action to set error", () => {
    const expectedAction = {
      type: actionTypes.FETCH_REPOS_FAILED,
      error: "error",
      loading: false
    };
    expect(fetchReposFailed("error")).toEqual(expectedAction);
  });

  describe("async action init repos", () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    it("creates FETCH_REPOS_SUCCESS when fetching is done", () => {
      fetchMock.getOnce(`${axios}/repos`, {
        headers: { "content-type": "application/json" }, // описываем заголовки ответа
        body: { data: "repos", status: "ok" }
      });

      const expectedActions = [
        {
          type: actionTypes.FETCH_REPOS_START,
          loading: true
        },
        {
          type: actionTypes.FETCH_REPOS_SUCCESS,
          repos: [],
          loading: false // в ожидании важно указать теже данные, что были указаны выше в моке запроса
        }
      ];
      const store = mockStore({});

      return store.dispatch(initRepos("repos")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
