import React from 'react';
import Days from './Days';
import Hours from './Hours';
import Minutes from './Minutes';

function CountDown(props){

    // Ideas for now. This state maybe needs to be able to change elsewhere
    // state = {
    //     daysLeft: '',
    //     hoursLeft: '',
    //     minutesLeft: ''
    // }

        return(
            <div className="u-center">
                <div className="grid">
                    <Days />
                    <Hours />
                    <Minutes />
                </div>
            </div>
        );
}

export default CountDown;