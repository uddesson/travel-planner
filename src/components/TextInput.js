import React from "react";
import PropTypes from "prop-types";

function TextInput(props){

    return(
        <React.Fragment>
            <label htmlFor={ props.htmlFor }>
                { props.label }
            </label>
            <br/>
            <input
                type="text"
                value={ props.value }
                onChange={ props.onChange }
                placeholder={ props.placeholder }
            >
            </input>
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