import React from 'react';

function Note(props){
    if(props.isEmpty){
        return(
            <div className="testborder">
                <h3>Note</h3>
                <a href="#options" onClick={props.toggleOptionDisplay}>
                    Add a reminder.
                </a>
            </div>
        )
    } else {
        return(
            <div className="testborder">
                <h3>Note</h3>
                {props.content}
            </div>
        )
    }
}

export default Note;