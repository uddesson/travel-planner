import React from 'react';
import CurrentTime from './CurrentTime';
import Title from './Title';
import CountDown from './CountDown';


function Header(){
    return(
        <div className="header">
            <CurrentTime />
            <Title destination="Tokyo" />
            <CountDown/>
        </div>
    );
}

export default Header;