import React from "react";
import Signup from "./component/signup/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login";
import Dashboard from "./component/dashboard/Dashboard";
import Aboutus from ".././src/component/aboutUs/Aboutus";
import Completed from ".././src/component/aboutUs/Completed";
import Main from "./component/main/Main";
import AuthenticRoute from "./common/authentic-route/AuthenticRoute";
function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Signup" component={Signup} />
        <AuthenticRoute path="/dashboard" component={Dashboard} />
        <AuthenticRoute path="/pending" component={Aboutus} />
        <AuthenticRoute path="/completed" component={Completed} />
        <Route path="*" component={() => "404 PAGE NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default App;
