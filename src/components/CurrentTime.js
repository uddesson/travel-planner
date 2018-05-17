import React from 'react';

/* TODO: Make this into a class and use state
+ componentDidMount to update time every sec */

function CurrentTime(){

    function setTime(){
        let stockholmTime = new Date ();
        let tokyoTime = new Date(stockholmTime);

        // Manually set the time difference
        tokyoTime.setHours(stockholmTime.getHours() + 7);

        let currentTime = {
            stockholm: stockholmTime.toLocaleTimeString(),
            tokyo: tokyoTime.toLocaleTimeString()
        }

        return currentTime;
    }

    let time = setTime();

    return(
        <div>
            <p className="align-right">Stockholm: {time.stockholm}</p>
            <p className="align-right">Tokyo: {time.tokyo}</p>
        </div>
    );
};

export default CurrentTime;
