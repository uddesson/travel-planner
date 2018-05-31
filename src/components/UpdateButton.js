import React from 'react';
import PropTypes from 'prop-types';

function UpdateButton(props){
    return(
        <input
            type="submit"
            value="Update"
            onClick={ props.onClick }>
        </input>
    );
}

UpdateButton.propTypes = {
    onClick: PropTypes.func
}

export default UpdateButton;
