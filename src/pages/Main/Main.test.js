import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Enzyme, { mount } from "enzyme";
import { Main } from "./Main";
import { userReducer } from "../../store/reducers/user";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Main", () => {
  let wrapper;
  let mockStore;
  beforeEach(() => {
    const getWrapper = (
      mockStore = createStore(userReducer, {
        user: {
          login: "login",
          id: "id",
          bio: "bio",
          img: "img"
        },
        error: null,
        loading: false
      })
    ) =>
      mount(
        <Provider store={mockStore}>
          <Main />
        </Provider>
      );

    mockStore = createStore(userReducer, {
      user: {
        login: "login",
        id: "id",
        bio: "bio",
        img: "img"
      },
      error: null,
      loading: false
    });
    mockStore.dispatch = jest.fn();
    wrapper = getWrapper(mockStore);
  });

  it("Main is mounted", () => {
    expect(wrapper.find("button").text()).toEqual("find user");
    expect(wrapper.find("form").length).toEqual(1);
  });
});
