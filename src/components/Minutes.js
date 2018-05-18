import React from 'react';

function Minutes(props){
    return(
        <div className="header__countdown-box">
            <h2>{props.amount}</h2>
            <p>Minutes</p>
        </div>
    );
}

export default Minutes;