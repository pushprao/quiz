import React, { Component } from "react";

class Question extends Component {
  render() {
    const { quiz, options } = this.props.quizData;

    return (
      <div className="quizPage">
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
    );
  }
}

export default Question;
