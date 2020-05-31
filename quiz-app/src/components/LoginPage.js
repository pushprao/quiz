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
    validate: {
      emailState: "",
    },
  };

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login with email:" + this.state.email);
    const { history } = this.props;
    history.push("/quiz");
  };

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }

  render() {
    return (
      <Container className="App">
        <h2 className="loginTitle">Sign In</h2>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup row>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="me@email.com"
                valid={this.state.validate.emailState === "has-success"}
                invalid={this.state.validate.emailState === "has-danger"}
                onChange={(e) => {
                  this.validateEmail(e);
                }}
                required
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
                onChange={(e) => this.handleChange(e)}
                required
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default LoginPage;
