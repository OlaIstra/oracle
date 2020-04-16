import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Enzyme, { mount } from "enzyme";
import { UserRepos } from "./UserRepos";
import { userReducer } from "../../store/reducers/user";
import { reposReducer } from "../../store/reducers/repos";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("UserRepos", () => {
  let wrapper;
  let mockStore;
  beforeEach(() => {
    const rootReducer = combineReducers({
      user: userReducer,
      repos: reposReducer
    });

    const getWrapper = (mockStore = createStore(rootReducer)) =>
      mount(
        <Provider store={mockStore}>
          <UserRepos />
        </Provider>
      );

    mockStore = createStore(rootReducer);
    mockStore.dispatch = jest.fn();
    wrapper = getWrapper(mockStore);
  });

  it("UserRepos is mounted", () => {
    expect(wrapper.find("div").length).toEqual(5);
  });
});
