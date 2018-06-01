import React from "react";
import PropTypes from "prop-types";
import CurrentTime from "./CurrentTime";
import Title from "./Title";
import CountDown from "./CountDown";
import AnchorLink from "./AnchorLink";


function Header(props){

    return(
        <div className="header">
            <div>
                <CurrentTime/>
                <AnchorLink
                    href="#options"
                    className="u-right"
                    onClick={ props.toggleOptionMode }
                />
            </div>

            <Title size={1} content="Your trip to Japan" className="u-margin-bottom u-center"/>

            <CountDown
                toggleOptionMode={ props.toggleOptionMode }
                countDownSetByUser={ props.countDownSetByUser }/>
        </div>
    );
}

Header.propTypes = {
    testClick: PropTypes.func,
    countDownSetByUser: PropTypes.number,
    optionMode: PropTypes.bool
}

export default Header;