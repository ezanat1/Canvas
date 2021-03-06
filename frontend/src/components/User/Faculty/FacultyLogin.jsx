import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { loginFaculty } from "../../../actions/authentication";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: ""
};
class FacultyLogin extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //Validation
  validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email";
    }
    if (!this.state.email) {
      emailError = "Please Enter  email";
    }
    if (!this.state.password) {
      passwordError = "Enter Password";
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  };
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
      console.log("props", this.props.loginFaculty(user));
      this.props.history.push("/facultyDashboard");
      // login(user).then(res => {
      //   if (res) {
      //     console.log("res");
      //     this.props.history.push("/homepage");
      //   }
      //   if (!res) {
      //     this.setState({ passwordError: "Invalid Password" });
      //     return false;
      //   }
      // });
    }
  }
  componentDidMount() {
    document.title = "Login";
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="valign-wrapper row login-box">
          <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title">Login</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />

                    <span
                      style={{ color: "red" }}
                      className="helper-text"
                      data-error="wrong"
                      data-success="right"
                    >
                      {this.state.emailError}
                    </span>
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
                    <small
                      style={{ color: "red" }}
                      className="helper-text"
                      data-error="wrong"
                    >
                      {this.state.passwordError}
                    </small>
                  </div>
                </div>
                <div>
                  <div>
                    <small>
                      Student Login <Link to="/login">Login</Link>
                    </small>
                  </div>

                  <small>
                    Don't Have an Account{" "}
                    <Link to="/register">Sign up Here</Link>
                  </small>
                </div>
              </div>
              <div className="card-action right-align">
                <input
                  style={{ backgroundColor: "#1e5abc", color: "white" }}
                  type="submit"
                  className="btn "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

FacultyLogin.propTypes = {
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginFaculty }
)(FacultyLogin);
