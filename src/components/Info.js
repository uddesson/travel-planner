import React from 'react';
import Weather from './Weather';
import Currency from './Currency';
import Note from './Note';

function Info(){
    return(
        <div className="grid testborder">
            <Weather />
            <Currency />
            <Note />
        </div>
    );
}

export default Info;