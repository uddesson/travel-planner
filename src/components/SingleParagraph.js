import React from "react";

function SingleParagraph(props){
    return(
        <p className={ props.className }>{ props.content }</p>
    );
}

export default SingleParagraph;