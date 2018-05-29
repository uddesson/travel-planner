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
        this.setCountDown();

        /* Set a timeinterval at one second even though minutes doesn't show,
        sneaky way of displaying new countdown-date "directly", instead of waiting one minute.

        TODO: Explore other ways of solving this */
        this.interval = setInterval(
            () => this.setCountDown(), 1000
        );
    }

    componentWillReceiveProps(){
        /* If timeUp isn't already set to false, it must be when new props are recived,
        because that means the user has set a new date and styling should be different */
        this.setState({timeUp: false})
    }

    setCountDown = () => {
        let countDownDate = this.props.countDownSetByUser;

        let now = new Date().getTime();
        let timeLeft = countDownDate - now;

        let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        daysLeft = this.resetIfUnvalid(daysLeft);

        let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hoursLeft = this.resetIfUnvalid(hoursLeft);

        let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        minutesLeft = this.resetIfUnvalid(minutesLeft);

        let timeSum = daysLeft + hoursLeft + minutesLeft;
        this.setState({daysLeft, hoursLeft, minutesLeft})

        this.checkIfTimeIsUp(timeSum);
    }

    resetIfUnvalid = (value) => {
        /* Handles negative date-values set by default if no countdown-date
        has been set by user. Instead returns a 0 to the countdown-components */
        if(value <= 0){
            value = 0;
        }
        return value;
    }

    checkIfTimeIsUp(timeSum){
        if(timeSum === 0){
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