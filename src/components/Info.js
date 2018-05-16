import React from 'react';
import Temperature from './Temperature';
import Currency from './Currency';
import Timer from './Timer';

function Info(){
    return(
        <div className="grid testborder">
            <Temperature />
            <Currency />
            <Timer />
        </div>
    );
}

export default Info;