import React from 'react';
import Weather from './Weather';
import Currency from './Currency';
import Note from './Note';

function Main(props){
    return(
        <div className="main grid">
            <Weather />
            <Currency />
            <Note
                isEmpty={!props.noteSetByUser ? true : false}
                content={props.noteSetByUser}
                toggleOptionDisplay={props.toggleOptionDisplay}/>
        </div>
    );
}

export default Main;