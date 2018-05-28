import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Title from './Title';
import CountDown from './CountDown';


function Header(props){

    return(
        <div className="header">
            <CurrentTime/>
            <a href="#options" onClick={props.toggleOptionDisplay}>Optionwheel</a>
            <Title destination="Tokyo" />
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