import React from "react";
import PropTypes from "prop-types";
import CurrentTime from "./CurrentTime";
import Title from "./Title";
import CountDown from "./CountDown";
import AnchorLink from "./AnchorLink";
import Icon from "../images/settings-work-tool.png";


function Header(props){

    return(
        <div className="header">
            <div>
                <CurrentTime/>
                <AnchorLink
                    href="#options"
                    className="header__icon"
                    onClick={ props.toggleOptionMode }
                    content="Optionwheel"
                    showAsImage={true}
                    src={ Icon }
                    alt="Settings Icon"
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