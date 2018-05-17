import React from 'react';
import Weather from './Weather';
import Currency from './Currency';
import Timer from './Timer';

function Info(){
    return(
        <div className="grid testborder">
            <Weather />
            <Currency />
            <Timer />
        </div>
    );
}

export default Info;