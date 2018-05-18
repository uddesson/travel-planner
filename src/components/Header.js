import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Title from './Title';
import CountDown from './CountDown';


function Header(props){

    return(
        <div className="header">
            <CurrentTime />
            <p onClick={props.testClick}>Optionwheel</p>
            <Title destination="Tokyo" />
            <CountDown/>
        </div>
    );
}

Header.propTypes = {
    testClick: PropTypes.func
}

export default Header;