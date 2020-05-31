import React, { Component } from "react";
import QuizPage from "./components/QuizPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { connect } from "react-redux";

// TODO: configure babel-transform-decorators-legacy plugin
// @connect((store) => {
//   return { questions: store.questions };
// })

class QuizApp extends Component {
  componentDidMount() {
    this.props.loadQuestions();
  }

  render() {
    console.log("questions of QuizApp: ", this.props.questions);
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/quiz" component={QuizPage} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { questions: state.quiz.questions };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadQuestions: () => {
      return dispatch({
        type: "FETCH_QUIZ_LIST",
        data: ["1", "2"],
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizApp);
