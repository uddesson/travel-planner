import React from 'react';

function StatusBar(props){
    return(
        <div className="statusbar">
            {props.statusMessage}
        </div>
    );
}

export default StatusBar;