import React from "react";

import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { Form } from "../../components/UI/Form/Form";

export const Main = props => {
  return (
    <>
      <Form>
        <Input type="text" placeholder="Enter user name" />
        <Button title="find user" />
      </Form>
    </>
  );
};
