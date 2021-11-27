import React from 'react';

function Greetings(){

    const date= new Date();
    const hours=date.getHours();
    let dayTime;
    const styles={fontSize: 30};

    if(hours<12)
    {
        dayTime="Morning";
        styles.color="yellow";
    }
    else if(hours >=12 && hours< 17)
    {
        dayTime="Afternoon";
        styles.color="green";
    }
    else{
        dayTime="Evening";
        styles.color="red";
    }

    return(<h3 style={styles}><strong>Good {dayTime} !</strong></h3>);
}
export default Greetings;