import React, { Component } from "react";
import { addCourse } from "../../HelperFunctions";
import jwt_decode from "jwt-decode";
const initialState = {
  course_ID: "",
  course_name: "",
  course_dept: "",
  course_room: "",
  course_description: "",
  course_capacity: "",
  faculty_email: "",
  course_IDError: "",
  course_nameError: "",
  course_deptError: "",
  course_roomError: "",
  course_descriptionError: "",
  course_capacityError: ""
};
class AddCourse extends Component {
  constructor() {
    super();
    this.state = initialState;
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // componentDidMount() {
  //   const token = localStorage.usertoken;
  //   const decoded = jwt_decode(token);
  //   this.setState({
  //     faculty_email: decoded.email
  //   });
  //   document.title = "Add Course";
  // }
  // onSubmit(e) {
  //   e.preventDefault();
  //   const course = {
  //     course_ID: this.state.course_ID,
  //     course_name: this.state.course_name,
  //     course_dept: this.state.course_dept,
  //     course_room: this.state.course_room,
  //     course_description: this.state.course_description,
  //     course_capacity: this.state.course_capacity,
  //     faculty_email: this.state.faculty_email
  //   };
  //   addCourse(course).then(res => {
  //     if (res) {
  //       this.props.history.push("/facultyDashboard");
  //     }
  //   });
  // }

  render() {
    return (
      <div className="container">
        <div className="valign-wrapper row login-box">
          <div className="col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title">Add Course</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="name">Course ID</label>
                    <input
                      type="text"
                      name="course_ID"
                      id="course_ID"
                      value={this.state.course_ID}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="name">Course Name</label>
                    <input
                      type="text"
                      name="course_name"
                      id="course_name"
                      value={this.state.course_name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="course_dept">Course Department</label>
                    <input
                      type="text"
                      name="course_dept"
                      id="course_dept"
                      value={this.state.course_dept}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="course_room">Course Room</label>
                    <input
                      type="text"
                      name="course_room"
                      id="course_room"
                      value={this.state.course_room}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="course_description">
                      Course Description
                    </label>
                    <input
                      type="text"
                      name="course_description"
                      id="course_description"
                      value={this.state.course_description}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="course_capacity">Course Capacity</label>
                    <input
                      type="text"
                      name="course_capacity"
                      id="course_capacity"
                      value={this.state.course_capacity}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="card-action right-align">
                  <input
                    type="submit"
                    className="btn blue waves-effect waves-light"
                    value="Add Course"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddCourse;
