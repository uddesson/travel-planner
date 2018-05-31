import React from "react";
import PropTypes from "prop-types";

function Title(props){
    if(props.size === 1){
        return(
            <h1 className={ props.className }>{ props.content }</h1>
        );
    }
    if(props.size === 2){
        return(
            <h2 className={ props.className }>{ props.content }</h2>
        );
    }
    if(props.size === 3){
        return(
            <h3 className={ props.className }>{ props.content }</h3>
        );
    }
};

Title.propTypes = {
    size: PropTypes.number,
    className: PropTypes.string,
    content: PropTypes.PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default Title;
