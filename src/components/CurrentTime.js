import React from "react";

class CurrentTime extends React.Component{

    state = {
        stockholmTime: "",
        japanTime: ""
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
        let japanTime = new Date();

        // Manually set the time difference
        japanTime.setHours(stockholmTime.getHours() + 7);

        stockholmTime = stockholmTime.toLocaleTimeString();
        japanTime = japanTime.toLocaleTimeString();

        this.setState({ stockholmTime, japanTime })
    }

    render(){
        return(
            <p className="header__current-time">
                SWEDEN: { this.state.stockholmTime } /
                JAPAN: { this.state.japanTime }
            </p>
        );
    }
};

export default CurrentTime;
