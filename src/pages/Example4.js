import React from "react";
import Joke from "./Joke";

function Example4(){

    return(
        <div className="quiz">
           <Joke quiz={{question:"In the type of Plants what does Phylum Coniferophyta classify?",answer:"Pines"}}/>
           <Joke quiz={{question:"What is Stratum (plural strata)?",answer:"unknown"}}/>
           <Joke quiz={{question:"Who is the Yoruba orisha (Spirit) of winds, tempests, and cyclones in the mythology of Sub-Saharan Africa?",answer:"Oya"}}/>
           <Joke quiz={{question:"What is the most populous state in the New England region of the United States?",answer:"Massachusetts"}}/>
        </div>
    );
}

export default Example4;