import React, { Component } from "react";
import "../styles/LoginPage.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

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
      <Container className="App">
        <h2 className="loginTitle">Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup row>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="me@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup row>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>

        {/*<div id="loginFormContent">*/}
        {/*<h2 className="loginHeader">Sign In</h2>*/}
        {/*          <form onSubmit={this.handleSubmit}>
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
          </form>*/}
      </Container>
    );
  }
}

export default LoginPage;
