import React, { Component } from "react";
import "../styles/quiz.css";
import Question from "./Question";
import Button from "reactstrap/es/Button";
import Results from "./Results";
import Spinner from "reactstrap/es/Spinner";

class QuizPage extends Component {
  state = {
    currentQuestion: 0,
    next: true,
    loading: true,
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

  render() {
    console.log("loading :", this.props.loading);
    const { currentQuestion } = this.state;
    const { questions } = this.props;
    console.log("Question: " + (currentQuestion + 1));
    return (
      <div className="quizPageContainer">
        {!this.props.loading && (
          <>
            <div className="questionArea">
              {this.state.showResults && (
                <Results quizList={questions} score={this.state.score} />
              )}
              {!this.state.showResults && questions.length > 0 && (
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

export default QuizPage;
