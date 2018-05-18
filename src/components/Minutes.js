import React from 'react';
import PropTypes from 'prop-types';

function Minutes(props){
    return(
        <div className="header__countdown-box">
            <h2>{props.amount}</h2>
            <p>Minutes</p>
        </div>
    );
}

Minutes.propTypes = {
    /* Is set to accept both beacuse initially
    an empty string is set, then a number is recived */
    amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
}

export default Minutes;