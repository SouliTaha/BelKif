import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import 'bootstrap/dist/css/bootstrap.min.css';
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ContactPage from "views/ContactPage/ContactPage";
import FishComb from "views/FishComb/FishComb.js";
import Solution from "views/Solution/Solution.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={LandingPage} />
      <Route path="/solution" component={Solution} />
      <Route path="/contactus" component={ContactPage} />
      <Route path='/fishcomb' component={FishComb} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
