import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./components/HomeView";
// import Navbar from "./components/Navbar";
// import Landing from "./components/Landing";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
// import Course from "./components/AddCourse";
import Homepage from "./components/User/Homepage";
// import AddCourse from "./components/AddCourse";
import SearchCourse from "./components/Search/SearchCourse";
import SearchHelper from "./components/Search/SearchHelper";
import Profile from "./components/User/Profile";
import Navbar from "./components/User/Navbar";
import CourseItem from "./components/Search/CourseItem";

import NavbarFaculty from "./components/User/Faculty/NavbarFaculty";
import HomepageFaculty from "./components/User/Faculty/HomepageFaculty";
import AddCourse from "./components/User/Faculty/AddCourse";
import CourseHome from "./components/User/Faculty/CourseHome";
import FacultyLogin from "./components/User/Faculty/FacultyLogin";
import FacultyRegister from "./components/User/Faculty/FacultyRegister";
import HomeView from "./components/HomeView";

class App extends Component {
  constructor(props) {
    super(props);
    const { pathname } = this.props.location;
    this.state = {
      isNavbarHidden:
        pathname === "/login" ||
        pathname === "/register" ||
        pathname === "/facultyRegister" ||
        pathname === "/facultyLogin"
    };
  }
  componentDidMount() {
    this.unlisten = this.props.history.listen(location => {
      const { pathname } = location;
      const isNavbarHidden =
        pathname === "/login" ||
        pathname === "/register" ||
        pathname === "/" ||
        pathname === "/facultyRegister" ||
        pathname === "/facultyLogin";

      this.setState({ isNavbarHidden });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { isNavbarHidden } = this.state;
    console.log(isNavbarHidden);

    return (
      <Router>
        {/* <div>
          // {!isNavbarHidden && <Navbar />}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <Route path="/homepage" component={Homepage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/searchcourse" component={SearchHelper} />
          <Route exact path="/item" component={CourseItem} />
        </div> */}
        <div>
          <div>
            {/* {!isNavbarHidden && <Navbar />} */}
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/homepage" component={Homepage} />
              <div>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/searchcourse" component={SearchHelper} />
                <Route exact path="/item" component={CourseItem} />
                <Route exact path="/courseHome" component={CourseHome} />
              </div>
            </Switch>
          </div>
          {/* <div>
            {!isNavbarHidden && <NavbarFaculty />}
            <Route path="/homepageFaculty" component={HomepageFaculty} />
            <Route path="/facultyLogin" component={FacultyLogin} />
            <Route path="/facultyRegister" component={FacultyRegister} />
            <Route path="/homepageFaculty" component={HomepageFaculty} />
            <Route path="/courseHome" component={CourseHome} />
            <Route path="/addcourse" component={AddCourse} />
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
