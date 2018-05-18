import React from 'react';

function Days(props){
    return(
        <div className="header__countdown-box">
            <h2>{props.amount}</h2>
            <p>Days</p>
        </div>
    );
}

export default Days;