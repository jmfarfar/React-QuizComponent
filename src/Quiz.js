import React from 'react';
import {Component} from 'react';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    render() {
        <div>
            <div className='QuizQuestion'>
                {quizData.quiz_questions[1].instruction_text}
            </div>
        </div>
    }
    constructor(props){
        super(props);

        this.state = {quiz_position: 1};
    }
}

export default Quiz;