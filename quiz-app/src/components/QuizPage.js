import React, { Component } from "react";
import "../styles/quiz.css";
import Question from "./Question";
import Button from "reactstrap/es/Button";
import Results from "./Results";
import mockResponse from "../mock/quizList";

class QuizPage extends Component {
  state = {
    quizList: [],
    currentQuestion: 0,
    next: true,
    loading: true,
    score: 0,
    showResults: false,
  };

  componentDidMount() {
    // this.getQuizList();
    // Uncomment to work in offline mode
    this.setState({ quizList: mockResponse.quizList });
  }

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
    if (this.state.quizList[this.state.currentQuestion].correct === index) {
      this.setState({ score: this.state.score + 1 });
    }
  };

  render() {
    const { currentQuestion, quizList } = this.state;
    console.log("Question: " + (currentQuestion + 1));
    return (
      <div className="quizPageContainer">
        <div className="questionArea">
          {this.state.showResults && (
            <Results quizList={this.state.quizList} score={this.state.score} />
          )}
          {!this.state.showResults && this.state.quizList.length > 0 && (
            <Question
              quizData={quizList[currentQuestion]}
              updateScore={this.updateScore}
              questionId={currentQuestion + 1}
            />
          )}
        </div>

        <div className="navBtnContainer">
          {currentQuestion !== 0 && currentQuestion < quizList.length - 1 && (
            <Button
              size={"md"}
              className="navBtn prev"
              onClick={this.prevQuestion}
            >
              Previous
            </Button>
          )}
          {currentQuestion < quizList.length - 1 && (
            <Button
              size={"md"}
              className="navBtn next"
              onClick={this.nextQuestion}
            >
              Next
            </Button>
          )}
          {!this.state.showResults && currentQuestion === quizList.length - 1 && (
            <Button
              size={"md"}
              className="navBtn finish"
              onClick={this.displayScores}
            >
              Check scores
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default QuizPage;
