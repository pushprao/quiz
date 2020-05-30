import React, { Component } from "react";
import "../styles/QuizPage.css";
import Question from "./Question";

class QuizPage extends Component {
  state = {
    quizList: [],
    currentQuestion: 0,
    next: true,
    loading: true,
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
        // this.loadQuizData(data);
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

  loadQuizData(data) {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        options: data.quizList[currentQuestion].options,
        quiz: data.quizList[currentQuestion].quiz,
        correctAnswer: data.quizList[currentQuestion].correct,
      };
    });
  }

  nextQuestion = () => {
    console.log("currentQuestion index:" + this.state.currentQuestion);
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="title">Word Quiz</div>

        {this.state.quizList.length > 0 && (
          <Question
            quizData={this.state.quizList[this.state.currentQuestion]}
          />
        )}

        <div>
          <button enabled={"true"} onClick={this.nextQuestion}>
            Next
          </button>
        </div>
        {/*        {this.state.quizList.length > 0 &&
          this.state.quizList.map(({ quiz, correct, options }, index) => (
            <div className="quizPage" key={index}>
              <div className="question">{quiz}</div>
              {options.map((answerText, index) => (
                <label className="options" key={answerText}>
                  <input
                    name={"answer"}
                    type={"radio"}
                    key={index}
                    id={answerText}
                    value={answerText}
                  />
                  {answerText}
                </label>
              ))}
            </div>
          ))}*/}
      </div>
    );
  }
}

export default QuizPage;
