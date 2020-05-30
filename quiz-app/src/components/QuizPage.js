import React, { useState } from "react";

const QuizPage = function ({ question, options }) {
  const [answers] = useState(options);
  return (
    <div className="quizPage">
      <div className="question">{question}</div>
      {answers.map((answerText, index) => (
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
};

export default QuizPage;
