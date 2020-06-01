import React, { Component } from "react";
import "../styles/results.css";

class Results extends Component {
  render() {
    return (
      <section className="resultsSection">
        <h2>Results</h2>
        <div className="scoring">
          <span className={"blink"}>User : {this.props.userId}</span>
        </div>
        <div className="scoring">
          <span className={"blink"}>
            You scored {this.props.score} out of {this.props.quizList.length}
          </span>
        </div>
        <ol>
          {this.props.quizList.map((quizData, index) => {
            var correctAnswer = quizData.options[quizData.correct];
            var yourAnswer = quizData.options[this.props.answers[index]];

            return (
              <li
                className={
                  "result" +
                  (yourAnswer === correctAnswer ? " correct" : " incorrect")
                }
                key={index}
              >
                <div>{quizData.quiz}</div>
                <div className="correctAnswer">
                  <b>Answer: {correctAnswer}</b>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    );
  }
}

export default Results;
