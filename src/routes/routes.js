import React from "react";
import { Route, Router, Switch } from "react-router";
import Home from "../pages/Home";
import history from '../services/history';
// import { Container } from './styles';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default Routes;
