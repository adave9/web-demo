import React from "react";
import Greetings from "../Greetings";

function Home (){

    return(
        <div className="greet">
            <Greetings/><br/>
            <div className="note-welcome">
                <p><strong>Click any of the above button to access a React Example.</strong></p>
            </div>
      </div>
      );
      
}

export default Home;