import React from "react";
import Title from "./Title";

function Note(props){
    if(props.isEmpty){
        return(
            <div className="grid__item">
                <Title size={3} content="Note" />
                <a href="#options" onClick={ props.toggleOptionDisplay }>
                    Add a reminder.
                </a>
            </div>
        )
    } else {
        return(
            <div className="grid__item">
                <Title size={3} content="Note" />
                { props.content }
            </div>
        )
    }
}

export default Note;