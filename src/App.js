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
            index: 0,
        };
    }

    nextQuestion = () => {
        if(this.state.index < this.state.questions.length - 1) {
            this.setState({index: this.state.index + 1})
        } 
    }

    selectAnswer = (answer) => {
       console.log(answer)
        
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">
               
                    <div>
                        <PollQuestion question={this.state.questions[this.state.index].question}></PollQuestion>
                        <PollAnswers answers={this.state.questions[this.state.index].answer_choices}
                                     selectAnswer={this.selectAnswer}></PollAnswers>
                    </div>
                
                </div>
                <div onClick={this.nextQuestion}> Next </div>
            </div>
        );
    }
}

export default App;
