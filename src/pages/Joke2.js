import React from "react";

function Joke2(props){

    return(
        <div className="joke">
            <p><strong>Question:</strong> {props.question}</p>
            <p><strong>Answer:</strong> {props.answer}</p>
            <hr/>
        </div>
    );
}

export default Joke2;