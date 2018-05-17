import React from 'react';
import Info from './Info';
import Title from './Title';
import CurrentTime from './CurrentTime';

function Header(){
    return(
        <div className="header">
            <CurrentTime />
            <Title destination="Tokyo" />
            <Info />
        </div>
    );
}

export default Header;