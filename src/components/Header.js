import React from 'react';
import CurrentTime from './CurrentTime';
import Title from './Title';
import CountDown from './CountDown';
import Info from './Info';

function Header(){
    return(
        <div className="header">
            <CurrentTime />
            <Title destination="Tokyo" />
            <CountDown />
            <Info />
        </div>
    );
}

export default Header;