import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Homepage from "../User/Homepage";
import Profile from "../User/Profile";
import SearchCourse from "../Search/SearchCourse";
import { Provider } from "react-redux";
import store from "../../store/store";

class RouteLogReg extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/homepage" component={Homepage} />
              <div className="container">
                <Route path="/profile" component={Profile} />
                <Route path="/searchcourse" component={SearchCourse} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default RouteLogReg;
