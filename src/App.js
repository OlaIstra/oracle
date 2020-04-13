import React from "react";

import { Route, withRouter, Switch, Redirect } from "react-router-dom";

import { Main } from "./pages/Main/Main";
import { UserRepos } from "./pages/UserRepos/UserRepos";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact render={props => <Main {...props} />} />
      <Route path="/:user" render={props => <UserRepos {...props} />} />
      <Redirect to="/" />
    </Switch>
  );

  return <div>{routes}</div>;
}

export default withRouter(App);
