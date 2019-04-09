import React, { Component } from "react";
import { register } from "../HelperFunctions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/authentication";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
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
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.registerUser(user, this.props.history);
  }
  componentDidMount() {
    document.title = "Register";
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
        <div className="valign-wrapper row register-box">
          <div className="col card hoverable s12 pull-s1 m6 pull-m3 l4 pull-l4">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="card-content">
                <span className="card-title">Register</span>
                <div className="row">
                  <div className="input-field col s12">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      value={this.state.lastName}
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
                    {/* <small>
                      <Link to="/login">Sign in Here</Link>
                    </small> */}
                  </div>
                </div>
              </div>
              <div className="card-action right-align">
                <input
                  style={{ backgroundColor: "#1e5abc", color: "white" }}
                  type="submit"
                  className="btn"
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
Register.propTypes = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
