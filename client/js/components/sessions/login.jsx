/* @flow weak */

"use strict";

import React from "react";
import Router from "react-router";
const Link = Router.Link;

module.exports = React.createClass({
  render: function(){
    return (<div>
      <Paper>
        <form action="/login" method="post">

          <h4>Login</h4>

          <TextField hintText="yofool@mycrib.com" floatingLabelText="Email"/>
          <TextField hintText="******" floatingLabelText="Password"/>

          <Link to="register">Create Account</Link>
          <FlatButton label="Create Account" />
          <FlatButton label="Login" primary={true} />

        </form>
      </Paper>

      <div className="button-example-container">
        <RaisedButton linkButton={true} href="/auth/facebook" secondary={true}>
          <FontIcon className="muidocs-icon-custom-facebook example-button-icon"/>
          <span className="mui-raised-button-label example-icon-button-label">Facebook</span>
        </RaisedButton>
      </div>

      <div className="button-example-container">
        <RaisedButton linkButton={true} href="/auth/twitter" secondary={true}>
          <FontIcon className="muidocs-icon-custom-twitter example-button-icon"/>
          <span className="mui-raised-button-label example-icon-button-label">Twitter</span>
        </RaisedButton>
      </div>

      <div className="button-example-container">
        <RaisedButton linkButton={true} href="/auth/google" secondary={true}>
          <FontIcon className="muidocs-icon-custom-google example-button-icon"/>
          <span className="mui-raised-button-label example-icon-button-label">Google+</span>
        </RaisedButton>
      </div>

    </div>);
  }
});