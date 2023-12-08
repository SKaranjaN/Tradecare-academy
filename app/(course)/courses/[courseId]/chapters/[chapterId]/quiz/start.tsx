import React from "react";

export default function QuizComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-gray p-3 mt-5 br-3">
            <div>
              Please read the quiz instructions carefully and attempt the questions
            </div>
            <h3>Instruction: Attempt all the questions</h3>
            <ul>
              <li>Question 1</li>
              <li>Question 2</li>
              <li>Question 3</li>
              <li>Question 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
