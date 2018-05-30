import React from "react";
import PropTypes from "prop-types";

function Title(props){
    return(
        <h1 className="u-center">Your trip to { props.destination }</h1>
    );
};

Title.propTypes = {
    destination: PropTypes.string
}

export default Title;
