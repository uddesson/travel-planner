import React from "react";
import Weather from "./Weather";
import Currency from "./Currency";
import Note from "./Note";
import AnchorLink from './AnchorLink';

function Main(props){
  let anchorLinkContent = "Show Options";
  if (props.optionMode) {
    anchorLinkContent = "Hide Options"
  }
  return(
    <div className="main">
      <div className="grid">
        <Weather />
        <Currency />
        <Note
          isEmpty={ !props.noteSetByUser ? true : false }
          content={ props.noteSetByUser }
          toggleOptionMode={ props.toggleOptionMode }
        />
      </div>
      <AnchorLink
        href="#options"
        className="u-margin-left"
        onClick={ props.toggleOptionMode }
        content={anchorLinkContent}
      />
    </div>
  );
}

export default Main;