import React, { Component } from "react";
import QuizPage from "./components/QuizPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    return (
      <Router>
        <Route path="/" exact component={LoginPage} />
        <Route
          path="/quiz"
          component={() => (
            <QuizPage
              questions={this.props.questions}
              loading={this.props.loading}
            />
          )}
        />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.quiz.questions,
    loading: state.quiz.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadQuestions: () => {
      return dispatch({ type: "FETCH_QUIZ_LIST" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizApp);
