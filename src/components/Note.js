import React from "react";
import Title from "./Title";
import AnchorLink from "./AnchorLink";

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
                <br/>
                <AnchorLink
                    href="#options"
                    className="u-margin-top"
                    onClick={ props.toggleOptionMode }
                    content="(Edit)"
                />
            </div>
        )
    }
}

export default Note;