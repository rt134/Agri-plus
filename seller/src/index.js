import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Seller from "./layouts/Admin.js";
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
        <Route includes path="/seller/login" component={Login}></Route>
        <Route includes path="/seller/signup" component={Signup}></Route>
        <Route path="/seller" component={Seller} />
        <Redirect from="/" to="/seller/dashboard" />
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
