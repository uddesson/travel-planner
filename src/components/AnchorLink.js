import React from 'react';

function AnchorLink(props){
    return(
        <a href={props.href} className={props.className} onClick={props.onClick}>
            {props.content}
        </a>
    );
}

export default AnchorLink;