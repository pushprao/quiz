import React, { Component } from "react";
import "../styles/login.css";
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
    console.log("Login with email:" + this.state.email);
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
                id="email"
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
      </Container>
    );
  }
}

export default LoginPage;
