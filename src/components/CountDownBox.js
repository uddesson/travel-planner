import React from "react";
import PropTypes from "prop-types";
import SingleParagraph from "./SingleParagraph";
import Title from "./Title";

function CountDownBox(props){
    if(props.stylingShouldBeReset === true){
        return(
            <div className="header__countdown-box" style={ props.style }>
                <Title size={2} content={ props.amount} />
                <SingleParagraph content={ props.span }/>
            </div>
            )
    } else {
        return(
            <div className="header__countdown-box">
                <Title size={2} content={ props.amount } />
                <SingleParagraph content={ props.span }/>
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