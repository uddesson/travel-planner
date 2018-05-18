import React from 'react';

function Hours(props){
    return(
        <div className="header__countdown-box">
            <h2>{props.amount}</h2>
            <p>Hours</p>
        </div>
    );
}

export default Hours;