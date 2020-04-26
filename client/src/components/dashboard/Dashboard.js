import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Home from "../../../src/home";
import Old from "../../../src/Old";

class Dashboard extends Component {
    handleLogOut = (e) => {
      e.preventDefault();
      this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
    return (
      <h5>
        <div>
             <h4>
             Hey there, Coach {user.name.split(" ")[0]}
             <br />
               WELCOME 👏
               <br />
              <button
              onClick={this.handleLogOut}>Logout</button>
            
            </h4>
            
              <Home />
            
        </div>
        </h5>
    )}}

    Dashboard.propTypes = {
        logoutUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
      };
      const mapStateToProps = state => ({
        auth: state.auth
      });
      export default connect(
        mapStateToProps,
        { logoutUser }
      )(Dashboard);