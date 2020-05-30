import React, { Component } from "react";
import "./styles/App.css";
import "./styles/QuizApp.css";
import QuizPage from "./components/QuizPage";

class QuizApp extends Component {
  state = {
    quizList: [],
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
        console.log(data);
        this.setState({ quizList: data.quizList });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getQuizList();
  }

  render() {
    return (
      <div className="container">
        <div className="title">Word Quiz</div>
        {this.state.quizList.length > 0 &&
          this.state.quizList.map(({ quiz, correct, options }, index) => (
            <QuizPage question={quiz} options={options} key={index}></QuizPage>
          ))}
      </div>
    );
  }
}

export default QuizApp;
