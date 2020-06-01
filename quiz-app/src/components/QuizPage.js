import React, { Component } from "react";
import "../styles/quiz.css";
import Question from "./Question";
import Button from "reactstrap/es/Button";
import Results from "./Results";
import Spinner from "reactstrap/es/Spinner";
import { connect } from "react-redux";

// TODO: configure babel-transform-decorators-legacy plugin
// @connect((store) => {
//   return { questions: store.questions };
// })
class QuizPage extends Component {
  state = {
    currentQuestion: 0,
    next: true,
    score: 0,
    showResults: false,
  };

  nextQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
  };

  prevQuestion = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion - 1,
    });
  };

  displayScores = () => {
    console.log("TODO: displayScores:" + this.state.score);
    this.setState({ showResults: true });
  };

  updateScore = (event, index) => {
    console.log("Selected Answer:" + index);
    if (this.props.questions[this.state.currentQuestion].correct === index) {
      this.setState({ score: this.state.score + 1 });
    }
  };

  componentDidMount() {
    this.props.loadQuestions();
  }

  render() {
    const { currentQuestion } = this.state;
    const { questions } = this.props;
    return (
      <div className="quizPageContainer">
        {!this.props.loading && (
          <>
            <div className="questionArea">
              {this.state.showResults && (
                <Results
                  quizList={questions}
                  score={this.state.score}
                  userId={this.props.userId}
                />
              )}
              {!this.state.showResults && questions.length && (
                <Question
                  quizData={questions[currentQuestion]}
                  updateScore={this.updateScore}
                  questionId={currentQuestion + 1}
                />
              )}
            </div>
            <div className="navBtnContainer">
              {currentQuestion !== 0 && currentQuestion < questions.length - 1 && (
                <Button
                  size={"md"}
                  className="navBtn prev"
                  onClick={this.prevQuestion}
                >
                  Previous
                </Button>
              )}
              {currentQuestion < questions.length - 1 && (
                <Button
                  size={"md"}
                  className="navBtn next"
                  onClick={this.nextQuestion}
                >
                  Next
                </Button>
              )}
              {!this.state.showResults &&
                currentQuestion === questions.length - 1 && (
                  <Button
                    size={"md"}
                    className="navBtn finish"
                    onClick={this.displayScores}
                  >
                    Check scores
                  </Button>
                )}
            </div>
          </>
        )}

        {this.props.loading && <Spinner color="primary" />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.quiz.questions,
    loading: state.quiz.loading,
    userId: state.login.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadQuestions: () => {
      return dispatch({ type: "FETCH_QUIZ_LIST" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
