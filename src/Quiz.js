import React, { Component } from 'react';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = { quizPosition: 1 };
  }

  render = () => (
    <div>
      <div className="quiz-question">
        {quizData.quiz_questions[0].instruction_text}
      </div>
    </div>
  );
}

export default Quiz;
