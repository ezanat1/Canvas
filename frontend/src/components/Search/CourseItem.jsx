import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default class CourseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_email: "",
      courseID: ""
    };
    this.registerClass = this.registerClass.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      student_email: decoded.email
    });
  }
  handleCourse = e => {
    e.preventDefault();
    this.setState({ courseID: e.target.value });
  };

  registerClass = event => {
    event.preventDefault();
    var data = {
      student_email: this.state.student_email,
      courseID: this.state.courseID
    };

    axios.post("students/registerclass", data).then(res => {
      if (res.status === 200) {
        console.log(res.data);
      }
    });
  };

  render() {
    let classesResult = null;
    if (this.props.class != null) {
      classesResult = this.props.class.map(singleClass => {
        return (
          <div className="col" key={singleClass.id}>
            <ul className="collection">
              <li className="collection-item avatar">
                <span className="title">{singleClass.course_name}</span>
                <p value={this.state.courseID} onChange={this.handleCourse}>
                  {singleClass.course_id}
                </p>
                <p>{singleClass.course_description}</p>
                {/* <a href="#!" className="secondary-content"> */}
                <button onClick={this.registerClass} className="">
                  {" "}
                  <i style={btnColor} className="material-icons">
                    add
                  </i>
                </button>
                {/* </a> */}
              </li>
            </ul>
          </div>
        );
      });

      return (
        <div className="contianer">
          <div>{classesResult}</div>
        </div>
      );
    }
  }
}
const btnColor = {
  background: "#1e5abc",
  color: "white"
};
