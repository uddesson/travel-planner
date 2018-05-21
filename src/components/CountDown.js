import React from 'react';
import Days from './Days';
import Hours from './Hours';
import Minutes from './Minutes';

class CountDown extends React.Component{

    state = {
        daysLeft: '',
        hoursLeft: '',
        minutesLeft: ''
    }

    componentDidMount(){
        /* Call setCountDownDate initally,
        to prevent user from seeing empty values until one minute has passed */
        this.setCountDownDate();

        /* Set a timeinterval at one second even though minutes doesn't show,
        sneaky way of displaying new countdown-date "directly", instead of waiting one minute.
        TODO: Explore other ways of solving this */
        this.interval = setInterval(
            () => this.setCountDownDate(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    setCountDownDate = () => {
        // Default value
        let countDownDate = new Date("May 5, 2019").getTime();

        if(!this.props.countDownSetByUser === false){
            countDownDate = this.props.countDownSetByUser;
        }

        let now = new Date().getTime();
        let timeLeft = countDownDate - now;

        // Reference: https://www.w3schools.com/howto/howto_js_countdown.asp
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        this.setState({daysLeft: days, hoursLeft: hours, minutesLeft: minutes})
    }

    render(){
        return(
            <div className="u-center">
                <div className="grid--fixed">
                    <Days amount={this.state.daysLeft}/>
                    <Hours amount={this.state.hoursLeft}/>
                    <Minutes amount={this.state.minutesLeft}/>
                </div>
            </div>
        );

    }
}

export default CountDown;