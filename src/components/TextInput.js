import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props){

    return(
        <React.Fragment>
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            >
            </input>
            <label htmlFor={props.htmlFor}>
                {props.label}
            </label>
        </React.Fragment>
    );
}

TextInput.propTypes = {
    htmlFor: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string
}

export default TextInput;