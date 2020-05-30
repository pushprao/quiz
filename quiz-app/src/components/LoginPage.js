import React, { Component } from "react";
import "../styles/LoginPage.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    auhtenticated: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("event: " + this.state.email);
    const { history } = this.props;
    history.push("/quiz");
  };

  render() {
    return (
      <div className="wrapper">
        <div id="loginFormContent">
          <h2 className="loginHeader">Sign In</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required={true}
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required={true}
              onChange={this.handleChange}
              value={this.state.password}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
