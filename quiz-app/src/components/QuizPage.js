import React, { Component } from "react";
import "../styles/QuizPage.css";
import Question from "./Question";
import Button from "reactstrap/es/Button";

class QuizPage extends Component {
  state = {
    quizList: [],
    currentQuestion: 0,
    next: true,
    loading: true,
    score: 0,
  };

  getQuizList = () => {
    fetch("https://wordquiz.p.rapidapi.com/questions", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordquiz.p.rapidapi.com",
        "x-rapidapi-key": "6eb4ae14fcmsh32aff8138116af9p1c6b49jsn67b52f1a9a6f",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.quizList);
        this.setState({
          quizList: data.quizList,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getQuizList();
  }

  nextQuestion = () => {
    console.log("currentQuestion index:" + this.state.currentQuestion);
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
    console.log("TODO: displayScores");
  };

  render() {
    const { currentQuestion, quizList } = this.state;
    return (
      <div className="quizPageContainer">
        <div className="quizTitle">Question {currentQuestion + 1}</div>

        <div className="questionArea">
          {this.state.quizList.length > 0 && (
            <Question quizData={quizList[currentQuestion]} />
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
          {currentQuestion === quizList.length - 1 && (
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
