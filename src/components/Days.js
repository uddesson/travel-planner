import React from 'react';
import PropTypes from 'prop-types';

function Days(props){
    if(props.stylingShouldBeReset === true){
        return(
            <div className="header__countdown-box" style={props.style}>
                <h2>{props.amount}</h2>
                <p>Days</p>
            </div>
            )
    } else {
        return(
            <div className="header__countdown-box">
                <h2>{props.amount}</h2>
                <p>Days</p>
            </div>
        );
    }
}

Days.propTypes = {
    /* Is set to accept both beacuse initially
    an empty string is set, then a number is recived */
    amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    style: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
}

export default Days;