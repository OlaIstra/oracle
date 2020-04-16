import React from "react";
import { ButtonStyle } from "./style";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { color } from "../../../styles/index";

describe("ButtonStyle", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ButtonStyle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("disabled if props.disabled", () => {
    const tree = renderer.create(<ButtonStyle disabled />).toJSON();
    expect(tree).toHaveStyleRule("cursor", "not-allowed");
    expect(tree).toHaveStyleRule("background", color.greyBlack);
    expect(tree).toHaveStyleRule("pointer-events", "none");
  });
});
