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
    this.props.showResutls();
  };

  selectedAnswer = (event, index) => {
    if (this.props.questions[this.state.currentQuestion].correct === index) {
      this.props.updateScore();
    }
    this.props.updateAnswers(this.state.currentQuestion, index);
  };

  componentDidMount() {
    this.props.loadQuestions();
  }

  render() {
    const { currentQuestion } = this.state;
    const { questions, quizCompleted } = this.props;
    return (
      <div className="quizPageContainer">
        {!this.props.loading && (
          <>
            <div className="questionArea">
              {quizCompleted && (
                <Results
                  quizList={questions}
                  score={this.props.score}
                  userId={this.props.userId}
                  answers={this.props.answers}
                />
              )}
              {!quizCompleted && questions.length && (
                <Question
                  quizData={questions[currentQuestion]}
                  selectedAnswer={this.selectedAnswer}
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
              {!quizCompleted && currentQuestion === questions.length - 1 && (
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
    quizCompleted: state.quiz.quizCompleted,
    score: state.quiz.score,
    answers: state.quiz.answers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadQuestions: () => {
      return dispatch({ type: "FETCH_QUIZ_LIST" });
    },
    updateScore: () => {
      return dispatch({
        type: "UPDATE_SCORE",
      });
    },
    updateAnswers: (questionId, option) => {
      return dispatch({
        type: "UPDATE_ANSWERS",
        answer: { questionId, option },
      });
    },
    showResutls: () => {
      return dispatch({ type: "QUIZ_COMPLETED" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
