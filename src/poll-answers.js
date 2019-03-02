import React, { 
    Component,
 } from 'react';


class PollAnswers extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    }
    render() {
        return (
            <div>
                { this.props.answers.map((answer, i) => (
                    <div>
                        <div>{answer.image}</div>
                        <div>{answer.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PollAnswers;