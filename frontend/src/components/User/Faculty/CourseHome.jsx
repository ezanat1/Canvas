import React, { Component } from "react";
import axios from "axios";
import CourseItemView from "../../User/Faculty/CourseItemView";
import jwt_decode from "jwt-decode";
import Navbar from "../Navbar";
export default class CourseHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: [],
      facultyEmail: ""
    };
  }

  // async componentDidMount() {
  //   try {
  //     const token = localStorage.usertoken;
  //     const decoded = jwt_decode(token);
  //     await this.setState({
  //       facultyEmail: decoded.email
  //     });

  //     const res = await axios.get("faculty/Course", {
  //       params: {
  //         facultyEmail: this.state.facultyEmail
  //       }
  //     });
  //     this.setState({
  //       class: res.data
  //     });
  //     console.log("courses", this.state.facultyEmail);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   console.log("new code", this.state.facultyEmail);
  // }
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    axios
      .get("faculty/Course", {
        params: {
          facultyEmail: decoded.email
        }
      })
      .then(res => {
        this.setState({
          class: res.data,
          facultyEmail: decoded.email
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <h3 className="center-align">My Courses</h3>
        <hr />

        <div className="row">
          <CourseItemView class={this.state.class} />
        </div>
      </div>
    );
  }
}
