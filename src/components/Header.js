import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Title from './Title';
import CountDown from './CountDown';


function Header(props){

    return(
        <div className="header">
            <div className="grid">
                <CurrentTime/>
                <a
                    href="#options"
                    className="u-right"
                    onClick={props.toggleOptionDisplay}>
                    Optionwheel
                </a>
            </div>
            <Title destination="Japan" />
            <CountDown
                toggleOptionMode={props.toggleOptionDisplay}
                countDownSetByUser={props.countDownSetByUser}/>
        </div>
    );
}

Header.propTypes = {
    testClick: PropTypes.func,
    countDownSetByUser: PropTypes.number,
    optionMode: PropTypes.bool
}

export default Header;