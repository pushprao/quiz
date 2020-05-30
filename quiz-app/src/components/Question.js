import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";

class Question extends Component {
  render() {
    const { quiz, options } = this.props.quizData;

    return (
      <FormGroup tag="fieldset">
        <div className="question">{quiz}</div>
        {options.map((answerText, index) => (
          <FormGroup check>
            <Label check>
              <Input type="radio" name="answer" />
              {answerText}
            </Label>
          </FormGroup>
        ))}
      </FormGroup>
    );
  }
}

export default Question;
