import React, { Component } from "react";
import QuizPage from "./components/QuizPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

class QuizApp extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={LoginPage} />
        <Route path="/quiz" component={QuizPage} />
      </Router>
    );
  }
}

export default QuizApp;
