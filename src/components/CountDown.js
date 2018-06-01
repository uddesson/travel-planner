import React from "react";
import CountDownBox from "./CountDownBox";
import PropTypes from "prop-types";
import AnchorLink from "./AnchorLink";

class CountDown extends React.Component{

    state = {
        daysLeft: "",
        hoursLeft: "",
        minutesLeft: "",
        timeUp: false
    }

    componentDidMount(){
        /* Call setCountDownDate initally, to prevent user from
        seeing empty values until one minute has passed */
        this.setCountDown();

        /* Set a timeinterval at one second even though minutes doesn't show,
        sneaky way of displaying new countdown-date "directly", instead of
        waiting one minute. */
        this.interval = setInterval(
            () => this.setCountDown(), 1000
        );
    }

    setCountDown = () => {
        let countDownDate = this.props.countDownSetByUser;

        let now = new Date().getTime();
        let timeLeft = countDownDate - now;

        let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        daysLeft = this.setToZeroIfUnvalidNumber(daysLeft);

        let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hoursLeft = this.setToZeroIfUnvalidNumber(hoursLeft);

        let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        minutesLeft = this.setToZeroIfUnvalidNumber(minutesLeft);

        let timeSum = daysLeft + hoursLeft + minutesLeft;
        this.setState({ daysLeft, hoursLeft, minutesLeft })

        this.checkIfTimeIsUp(timeSum);
    }

    setToZeroIfUnvalidNumber = (value) => {
        /* Handles negative date-values set by default if no countdown-date
        has been set by user. Instead returns a 0 to the countdown-components */
        if(value <= 0){
            value = 0;
        }
        return value;
    }

    componentWillReceiveProps(){
        /* Trigged when the user toggles options and sets a first/new date,
        which means the countdown can go from 0 to other, and timeUp-state must be checked */
        this.checkIfTimeIsUp(this.state.daysLeft + this.state.hoursLeft + this.state.minutesLeft)
    }

    checkIfTimeIsUp(timeSum){
        if(timeSum === 0){
            this.setState({ timeUp: true });
        } else {
            this.setState({ timeUp: false });
        }
    }

    render(){
        const timeUpStyles = {
            backgroundColor: "rgba(94, 255, 180, 0.372)",
        }

        return(
            <div className="u-center">
                <div className="grid--fixed">
                    <CountDownBox
                        span={ "Days" }
                        amount={ this.state.daysLeft }
                        stylingShouldBeReset={ this.state.timeUp }
                        style={ timeUpStyles }
                    />
                    <CountDownBox
                        span={ "Hours" }
                        amount={ this.state.hoursLeft }
                        stylingShouldBeReset={ this.state.timeUp }
                        style={ timeUpStyles }
                    />
                    <CountDownBox
                        span={ "Minutes" }
                        amount={ this.state.minutesLeft }
                        stylingShouldBeReset={ this.state.timeUp }
                        style={ timeUpStyles }
                    />
                </div>

                {   /* If time is up, show a link to set new date (toggles optionMode) */
                    this.state.timeUp &&
                    <div className="u-margin-top">
                        <AnchorLink
                            href="#options"
                            className="u-right"
                            onClick={ this.props.toggleOptionMode }
                            content="Set a new date"
                        />
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