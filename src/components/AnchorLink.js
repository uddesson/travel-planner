import React from 'react';

function AnchorLink(props){
    if(props.showAsImage){
        return(
            <a href={props.href} className={props.className} onClick={props.onClick}>
                <img src={props.src}></img>
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

export default AnchorLink;