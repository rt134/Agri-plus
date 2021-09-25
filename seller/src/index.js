import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Client from "./layouts/Admin.js";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import "./assets/css/material-dashboard-react.css?v=1.10.0";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Switch>
        <Route includes path="/client/login" component={Login}></Route>
        <Route includes path="/client/signup" component={Signup}></Route>
        <Route path="/client" component={Client} />
        <Redirect from="/" to="/client/dashboard" />
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
