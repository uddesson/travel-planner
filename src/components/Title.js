import React from "react";
import PropTypes from "prop-types";

function Title(props){
    if(props.size === 1){
        return(
            <h1 className="u-center">{ props.content }</h1>
        );
    }
    if(props.size === 2){
        return(
            <h2>{ props.content }</h2>
        );
    }
    if(props.size === 3){
        return(
            <h3>{ props.content }</h3>
        );
    }
};

Title.propTypes = {
    size: PropTypes.number,
    content: PropTypes.string
}

export default Title;
