import React, { 
    Component,
 } from 'react';
import './App.css';
import PollQuestion from './poll-question.js';
import PollAnswers from './poll-answers.js';


const questions = require('./data/questions.json');

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            questions: questions,
        };
        console.log(this.state.questions)
    }
    render() {
        return (
            <div className="App">

                <div className="App-header">

                { this.state.questions.map((question, i) => (
                    <div>
                        <PollQuestion question={question.question}></PollQuestion>
                        <PollAnswers answers={question.answer_choices}></PollAnswers>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default App;
