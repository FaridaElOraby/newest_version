import React, { Component } from 'react';

import PropTypes from "prop-types";
import {withRouter} from "react-router-dom"
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component{

componentDidMount() {
  // If logged in and user navigates to Login page, should redirect them to dashboard
  if (this.props.auth.isAuthenticated) {
    this.props.history.push("/dashboard");
  }
}

    state={
        name: "",
        email: "",
        errors:{}
    };

    componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/dashboard"); // push user to dashboard when they login
      }
  if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
}
handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(userData); 
      // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };
    handleReg = (e) => {
      this.props.history.push("/register");
    }
render(){
    const { errors } = this.state;
    return (
      <h3>
        <div className="login-page">
            <h4>
             Welcome to Karate Login
            </h4>
              <form onSubmit={this.handleSubmit}>
              
                <label htmlFor="email"> Email: </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />  
                  <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>

                  <label htmlFor="password"> Password:  </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                 <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                <br />
                <button type="submit">Login</button>
                </form>
                <p>
                Don't have an account?
                <br />
                <button onClick={this.handleReg}>Register</button>
              </p>

        </div>
        </h3>
    )
}
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
