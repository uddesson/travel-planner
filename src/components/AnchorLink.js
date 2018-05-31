import React from 'react';
import PropTypes from 'prop-types';

function AnchorLink(props){
    if(props.showAsImage){
        return(
            <a href={props.href} className={props.className} onClick={props.onClick}>
                <img src={props.src} alt={props.alt}></img>
            </a>
        )
    }else{
        return(
            <a href={props.href} className={props.className} onClick={props.onClick}>
                {props.content}
            </a>
        );
    }
}

AnchorLink.propTypes = {
    showAsImage: PropTypes.bool,
    href: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string
}

export default AnchorLink;