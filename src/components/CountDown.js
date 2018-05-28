import React from 'react';
import CountDownBox from './CountDownBox';
import PropTypes from 'prop-types';

class CountDown extends React.Component{

    state = {
        daysLeft: '',
        hoursLeft: '',
        minutesLeft: '',
        timeUp: false
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

    componentDidUpdate(){
       // TODO: Set timeUp to false when a new date is set from 0
    }

    setCountDownDate = () => {
        let countDownDate = this.props.countDownSetByUser;

        if(!countDownDate){
            countDownDate = new Date().getTime();
        }

        let now = new Date().getTime();
        let timeLeft = countDownDate - now;

        // Reference: https://www.w3schools.com/howto/howto_js_countdown.asp
        let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        let timeSum = daysLeft + hoursLeft + minutesLeft;

        this.checkIfTimeIsUp(timeSum);
        this.setState({daysLeft, hoursLeft, minutesLeft})
    }

    checkIfTimeIsUp(time){
        /* Check if the sum of time is 0. Also check if state.daysLeft is an empty string,
        (that will also be the case for hours and minutes), to avoid showing the
        timeUp-styling when you intially start the app */
        if(time === 0 && this.state.daysLeft !== ''){
            // Will clear the interval and stop the countdown
            clearInterval(this.interval)

            this.setState({timeUp: true});
        }
    }


    render(){
        const timeUpStyles = {
            backgroundColor: "rgba(189, 39, 74, 0.4)",
        }

        return(
            <div className="u-center">
                <div className="grid--fixed">
                    <CountDownBox
                        span={'Days'}
                        amount={this.state.daysLeft}
                        stylingShouldBeReset={this.state.timeUp}
                        style={timeUpStyles}
                    />
                    <CountDownBox
                        span={'Hours'}
                        amount={this.state.hoursLeft}
                        stylingShouldBeReset={this.state.timeUp}
                        style={timeUpStyles}
                    />
                    <CountDownBox
                        span={'Minutes'}
                        amount={this.state.minutesLeft}
                        stylingShouldBeReset={this.state.timeUp}
                        style={timeUpStyles}
                    />
                </div>
                {   /* If time is up, show a link to set new date (toggles optionMode) */
                    this.state.timeUp &&
                    <div className="u-margin-top">
                        <a href="#options" onClick={this.props.toggleOptionMode}>
                            Set a new date
                        </a>
                    </div>
                }
            </div>
        );
    }
}

CountDown.propTypes = {
    toggleOptionMode: PropTypes.func,
    countDownSetByUser: PropTypes.number
}

export default CountDown;