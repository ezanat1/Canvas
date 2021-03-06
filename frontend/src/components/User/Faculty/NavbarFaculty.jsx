import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Link, withRouter } from "react-router-dom";
import AddCourse from "./AddCourse";

class NavbarFaculty extends Component {
  logOut(event) {
    event.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push("/facultyLogin");
  }
  render() {
    return (
      <ul style={navBarStyle} id="sidenav-1" className="sidenav sidenav-fixed">
        <li>
          <h1 className="center-align" style={{ fontSize: "30px" }}>
            SJSU
          </h1>
        </li>
        <li>
          <i style={linkStyle} className="material-icons ">
            person
          </i>
        </li>
        <li>
          <Link to="/addcourse">
            <i style={linkStyle} className="material-icons">
              add
            </i>
          </Link>
        </li>
        <li>
          <Link to="/courseHome">
            <i style={linkStyle} className="material-icons">
              book
            </i>
          </Link>
        </li>
        <li style={linkStyle}>
          <a href="" onClick={this.logOut.bind(this)}>
            <i style={linkStyles} className="fas fa-sign-out-alt" />
          </a>
        </li>
      </ul>
    );
  }
}
const navBarStyle = {
  paddingTop: "100px",
  backgroundColor: "#1e5abc",
  color: "white",
  width: "100px",
  fontSize: "20px",
  hover: ""
};
const imageStyle = {
  width: "100px",
  heigh: "80px",
  borderRadius: "50%"
};
const linkStyle = {
  color: "white"
};
const linkStyles = {
  fontSize: "20px",
  color: "white"
};
const smalStyle = {
  fontSize: "10px",
  color: "white"
};

export default withRouter(NavbarFaculty);
