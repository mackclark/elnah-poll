import React, { 
    Component,
 } from 'react';
import './App.css';


class PollQuestion extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    }
    render() {
        return (
            <div >
                {this.props.question}
            </div>
        );
    }
}

export default PollQuestion;
