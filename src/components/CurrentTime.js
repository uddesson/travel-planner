import React from 'react';

class CurrentTime extends React.Component{

    state = {
        stockholmTime: '',
        tokyoTime: ''
    }

    componentDidMount(){
        this.interval = setInterval(
            () => this.setTime(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    setTime =() => {
        let stockholmTime = new Date ();
        let tokyoTime = new Date();

        // Manually set the time difference
        tokyoTime.setHours(stockholmTime.getHours() + 7);

        stockholmTime = stockholmTime.toLocaleTimeString(),
        tokyoTime = tokyoTime.toLocaleTimeString()

        this.setState({stockholmTime, tokyoTime})
    }

    render(){
        return(
            <div className="header__current-time">
                <p>STHLM: {this.state.stockholmTime}</p>
                <p>TOKYO: {this.state.tokyoTime}</p>
            </div>
        );
    }
};

export default CurrentTime;
