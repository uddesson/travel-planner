import React from 'react';
import PropTypes from 'prop-types';

function UpdateButton(props){
    return(
        <input
            type="submit"
            value="Update"
            className={ props.className }
            onClick={ props.onClick }>
        </input>
    );
}

UpdateButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default UpdateButton;
