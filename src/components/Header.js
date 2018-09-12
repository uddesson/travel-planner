import React from "react";
import PropTypes from "prop-types";
import CurrentTime from "./CurrentTime";
import Title from "./Title";
import CountDown from "./CountDown";
import AnchorLink from "./AnchorLink";


function Header(props){
  return(
    <div className="header">
      <div className="u-margin-bottom">
          <CurrentTime/>
      </div>

      <div className="container__inner">
        <Title
            size={1}
            content="Your trip to Japan"
            className="u-margin-bottom u-center"
        />

        <CountDown
            toggleOptionMode={ props.toggleOptionMode }
            countDownSetByUser={ props.countDownSetByUser }
        />
        </div>
    </div>
  );
}

Header.propTypes = {
    testClick: PropTypes.func,
    countDownSetByUser: PropTypes.number,
    optionMode: PropTypes.bool
}

export default Header;