import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const Question = (props) => {
  const { quiz, options } = props.quizData;
  return (
    <>
      <div className="quizTitle">Question {props.questionId}</div>
      <FormGroup>
        <div className="question">{quiz}</div>
        {options.map((answerText, index) => (
          <FormGroup key={index}>
            <Label check className={"options"}>
              <Input
                type="radio"
                name="answer"
                id={index}
                onChange={(e) => {
                  props.selectedAnswer(e, index);
                }}
              />
              {answerText}
            </Label>
          </FormGroup>
        ))}
      </FormGroup>
    </>
  );
};

export default Question;
