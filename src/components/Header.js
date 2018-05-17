import React from 'react';
import CurrentTime from './CurrentTime';
import Title from './Title';
import CountDown from './CountDown';


class Header extends React.Component{

    render(){
        return(
            <div className="header">
                <CurrentTime />
                <Title destination="Tokyo" />
                <CountDown/>
            </div>
        );
    }
}

export default Header;