import React from "react";
import ContactCard from "./ContactCard";

function Example3(){

    return(
        <div>
            <ContactCard
            contact={{imgurl:"http://placekitten.com/300/200",name:"Mr. Dave",number:"(123)-456-7890",email:"abccat@cat.com"}}
            />
            <ContactCard
            contact={{imgurl:"http://placekitten.com/400/200",name:"Mr. Paul",number:"(123)-456-7890",email:"xyzcat@cat.com"}}
            />
            <ContactCard
            contact={{imgurl:"http://placekitten.com/300/300",name:"Miss. Katie",number:"(987)-000-7890",email:"katcat@cat.com"}}
            />
        </div>
    );
}

export default Example3;