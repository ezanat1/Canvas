import React, { Component } from "react";
import { register } from "../HelperFunctions";
import { Link, withRouter } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    register(user).then(res => {
      if (res) {
        this.props.history.push("/login");
      }
    });
  }
  componentDidMount() {
    document.title = "Register";
  }
  render() {
    return (
      <div className="container">
        <div className="valign-wrapper row register-box">
          <div className="col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title">Register</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="password"> Password </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.passsword}
                      onChange={this.onChange}
                    />
                  </div>
                  <div>
                    <small>Already have an Account </small>
                    <small>
                      <Link to="/login">Sign in Here</Link>
                    </small>
                  </div>
                </div>
              </div>
              <div className="card-action right-align">
                <input
                  type="submit"
                  className="btn teal waves-effect waves-light"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;