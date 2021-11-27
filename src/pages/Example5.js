import React from "react";
import Joke2 from "./Joke2";
import jokedata from "./JokeData";

function Example4(){

    const jokeComponent = jokedata.map(jokes=><Joke2 key={jokes.id}  question={jokes.question} answer={jokes.answer}/>);

    return(
        <div className="quiz">
          {jokeComponent}
        </div>
    );
}

export default Example4;