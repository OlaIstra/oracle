import React from "react";

import { InputWrapper, InputStyle } from "./style";

export const Input = React.forwardRef((props, ref) => {
  return (
    <InputWrapper>
      <InputStyle
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
        className="validate"
        ref={ref}
        onChange={() => props.changed(ref.current.value)}
      />
    </InputWrapper>
  );
});
