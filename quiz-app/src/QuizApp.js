import React from "react";
import QuizPage from "./components/QuizPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

const QuizApp = function () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/quiz" component={QuizPage} />
      </Switch>
    </Router>
  );
};

export default QuizApp;
