import React from 'react';

function ContactCard(props){

    return(
        <div className="contact-card">
                <div className="card">
                    <img src={props.contact.imgurl}/>
                    <h3>{props.contact.name}</h3>
                    <p>Phone: {props.contact.number}<br/>Email: {props.contact.email}</p>
                </div>
        </div>
    );
}

export default ContactCard;