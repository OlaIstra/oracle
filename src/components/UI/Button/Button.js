import React from "react";

import { ButtonStyle } from "./style";

export const Button = props => {
  return (
    <ButtonStyle onClick={props.clicked} disabled={props.disabled}>
      {props.title}
    </ButtonStyle>
  );
};
