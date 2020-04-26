import React, { Component } from 'react';
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom"
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";


class Register extends Component{
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
    state={
        name: "",
        email: "",
        password: "",
        password2: "",
        errors:{}
    };

    componentWillReceiveProps(nextProps) {
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
const newUser = {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password,
    password2: this.state.password2
  }
this.props.registerUser(newUser, this.props.history); 
  };

  handleLog = (e) => {
    this.props.history.push("/login");
  }

render(){
    const { errors } = this.state;
    return (
      <h3>
        <div className="register-page">
            <h4>
             <b>Register</b> below
            </h4>
           
              <form onSubmit={this.handleSubmit}>
              <div>
              <label htmlFor="name">Name: </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
               <span className="red-text">{errors.name}</span>
</div>
<div>
                <label htmlFor="email">Email: </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                /> 
                <span className="red-text">{errors.email}</span> 
</div>
<div>
                  <label htmlFor="password">Password: </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                                <span className="red-text">{errors.password}</span>
                                </div>

                                <div>
                <label htmlFor="password2">Confirm Password: </label>
                <input
                  onChange={this.handleChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
              <span className="red-text">{errors.password2}</span>
              </div>
              <div>
                <button type="submit">Sign up</button>
                </div>
                </form>
               

        </div>

        <h2>
                Already have an account?
                <br />
                <button onClick={this.handleLog}>Login</button>
              </h2>
              </h3>
     
    )
}
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));