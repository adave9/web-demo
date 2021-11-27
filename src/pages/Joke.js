import React from "react";
import {useState} from 'react';

function Joke(props){

    const [view,setView]=useState("false");

    return(
        <div className="joke">
            <p><strong>Question:</strong> {props.quiz.question}</p>

            <button type="button" onClick={()=>setView("true")}>Show Answer</button>

            {view==="true" ? <p>{props.quiz.answer}</p> : <p>Hidden</p>}
            <hr/>
        </div>
    );
}

export default Joke;