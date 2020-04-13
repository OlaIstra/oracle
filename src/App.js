import React from "react";

import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { Main } from "./pages/Main/Main";
import { UserRepos } from "./pages/UserRepos/UserRepos";

import { AppStyle } from "./style";

function App() {
  const user = useSelector(state => {
    if (state.user.user) {
      return state.user.user.login;
    }
  });

  let routes = (
    <Switch>
      <Route path="/" exact render={props => <Main {...props} />} />
      <Route path="/:user" render={props => <UserRepos {...props} />} />
      <Redirect to="/" />
    </Switch>
  );

  if (!user) {
    routes = (
      <Switch>
        <Route path="/" exact render={props => <Main {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <AppStyle>{routes}</AppStyle>;
}

export default withRouter(App);
