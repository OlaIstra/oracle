import React from "react";

import { FormStyle } from "./style";

export const Form = props => {
  return (
    <FormStyle onSubmit={event => props.submit(event)}>
      {props.children}
    </FormStyle>
  );
};
