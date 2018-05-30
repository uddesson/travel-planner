import React from "react";
import PropTypes from "prop-types";

function CountDownBox(props){
    if(props.stylingShouldBeReset === true){
        return(
            <div className="header__countdown-box" style={ props.style }>
                <h2>{ props.amount }</h2>
                <p>{ props.span }</p>
            </div>
            )
    } else {
        return(
            <div className="header__countdown-box">
                <h2>{ props.amount }</h2>
                <p>{ props.span }</p>
            </div>
        );
    }
}

CountDownBox.propTypes = {
    /* Is set to accept both beacuse initially
    an empty string is set, then a number/object is recived */
    amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    style: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    span: PropTypes.string
}

export default CountDownBox;