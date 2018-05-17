import React from 'react';
import Info from './Info';
import Title from './Title';
import CurrentTime from './CurrentTime';

function Header(){
    return(
        <div className="header testborder">
            <CurrentTime />
            <Title destination="TOKYO" />
            <Info />
        </div>
    );
}

export default Header;