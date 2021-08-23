import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Client from "./layouts/Admin.js";
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"
import "./assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route includes path = '/client/login' component = {Login}></Route>
      <Route includes path = '/client/signup' component = {Signup}></Route>
      <Route path="/client" component={Client} />
      <Redirect from="/" to="/client/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
