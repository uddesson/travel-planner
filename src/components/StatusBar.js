import React from 'react';
import PropTypes from 'prop-types';

function StatusBar(props){
    return(
        <div className="statusbar">
            { props.statusMessage }
        </div>
    );
}

StatusBar.propTypes = {
    statusMessage: PropTypes.string
}

export default StatusBar;