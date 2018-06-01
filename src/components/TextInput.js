import React from "react";
import PropTypes from "prop-types";

function TextInput(props){
    if(props.textArea){
        return(
            <React.Fragment>
                <label htmlFor={ props.htmlFor }>
                    { props.label }
                </label>
                <br/>
                <textarea
                    value={ props.value }
                    onChange={ props.onChange }
                    className={ props.className }
                    placeholder={ props.placeholder }
                >
                </textarea>
            </React.Fragment>
        );
    } else {
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
                    className={ props.className }
                    placeholder={ props.placeholder }
                >
                </input>
            </React.Fragment>
        );
    }
}

TextInput.propTypes = {
    htmlFor: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    textarea: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string
}

export default TextInput;