import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Title from './Title';
import CountDown from './CountDown';


function Header(props){

    return(
        <div className="header">
            <CurrentTime/>
            <p onClick={props.toggleOptionDisplay}>Optionwheel</p>
            <Title destination="Tokyo" />
            <CountDown toggleOptionMode={props.toggleOptionDisplay} countDownSetByUser={props.countDownSetByUser}/>
        </div>
    );
}

Header.propTypes = {
    testClick: PropTypes.func,
    countDownSetByUser: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    optionMode: PropTypes.bool
}

export default Header;