import React from 'react';

function UpdateButton(props){
    return(
        <input
            type="submit"
            value="Update"
            onClick={ props.onClick }>
        </input>
    );
}

export default UpdateButton;
