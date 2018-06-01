import React from "react";
import Title from "./Title";

function Note(props){
    if(props.isEmpty){
        return(
            <div className="grid__item">
                <Title size={3} content="Reminder" />
                <a href="#options" onClick={ props.toggleOptionMode }>
                    Add a reminder.
                </a>
            </div>
        )
    } else {
        return(
            <div className="grid__item">
                <Title size={3} content="Reminder" />
                { props.content }
            </div>
        )
    }
}

export default Note;