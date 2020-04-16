import React from "react";
import Enzyme, { shallow } from "enzyme";
import { CardStyle } from "./style";
import renderer from "react-test-renderer";
import "jest-styled-components";

describe("CardStyle", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CardStyle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
