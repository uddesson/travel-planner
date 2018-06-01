import React from "react";
import Title from "./Title";
import AnchorLink from "./AnchorLink";
import SingleParagraph from "./SingleParagraph";

function Note(props){
    if(props.isEmpty){
        return(
            <div className="grid__item">
                <Title size={3} content="Reminder" />

                <AnchorLink
                    href="#options"
                    onClick={ props.toggleOptionMode }
                    content="Add a reminder"
                />
            </div>
        )
    } else {
        return(
            <div className="grid__item">
                <Title size={3} content="Reminder" />

                <SingleParagraph content={ props.content } />

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