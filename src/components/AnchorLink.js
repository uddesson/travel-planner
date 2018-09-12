import React from 'react';
import PropTypes from 'prop-types';

function AnchorLink(props){
    return(
      <a href={props.href} className={props.className} onClick={props.onClick}>
          {props.content}
      </a>
    );
}

AnchorLink.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default AnchorLink;