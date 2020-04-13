import React, { useState, createRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

import { Card } from "../../components/Card/Card";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { Form } from "../../components/UI/Form/Form";
import { ShadowDivStyle } from "../../components/RepoLink/style";
import { Spinner } from "../../components/UI/Spinner/Spinner";

const ref = createRef();

export const Main = props => {
  const dispatch = useDispatch();

  const onInitUser = event => {
    event.preventDefault();
    dispatch(actions.initUser(searchUser));
    ref.current.value = "";
  };

  const [searchUser, setSearchUser] = useState(null);

  const onInsertUser = inputVal => {
    setSearchUser(inputVal);
  };

  const user = useSelector(state => {
    return state.user.user;
  });

  const error = useSelector(state => {
    return state.user.error;
  });

  const loading = useSelector(state => {
    return state.user.loading;
  });

  let isDisabled = false;

  if (!searchUser) {
    isDisabled = true;
  }

  let infoBlock;

  user
    ? (infoBlock = <Card login={user.login} bio={user.bio} img={user.img} />)
    : (infoBlock = null);

  if (error) {
    infoBlock = <ShadowDivStyle>{error}</ShadowDivStyle>;
  }

  if (loading) {
    infoBlock = <Spinner />;
  }

  return (
    <>
      <Form submit={event => onInitUser(event)}>
        <Input
          type="text"
          placeholder="Enter user name"
          changed={onInsertUser}
          ref={ref}
        />
        <Button title="find user" clicked={onInitUser} disabled={isDisabled} />
      </Form>
      {infoBlock}
    </>
  );
};
