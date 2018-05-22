import React from 'react';
import Days from './Days';
import Hours from './Hours';
import Minutes from './Minutes';

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

    setCountDownDate = () => {
        // Default value
        let countDownDate = new Date("May 5, 2019").getTime();

        if(!this.props.countDownSetByUser === false){
            countDownDate = this.props.countDownSetByUser;
        }

        let now = new Date().getTime();
        let timeLeft = countDownDate - now;

        // Reference: https://www.w3schools.com/howto/howto_js_countdown.asp
        // let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        // let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        let days = 0;
        let hours = 0;
        let minutes = 0;


        if(days + hours + minutes === 0){
            console.log('timesuppp')

            // Will clear the interval and stop the "ticking"
            clearInterval(this.interval)

            /* TODO: Trigger the option-component and show some text,
            setting optionMode (in App) to true */
            this.displayTimeUp();
        }

        this.setState({daysLeft: days, hoursLeft: hours, minutesLeft: minutes})
    }

    displayTimeUp(){
        this.setState({timeUp: true});
    }

    render(){
        const timeUpStyles = {
            backgroundColor: "rgba(189, 39, 74, 0.4)",
        }

        // TODO: Maybe make Days, Hours and Minutes to one reuasable component??
        return(
            <div className="u-center">
                <div className="grid--fixed">
                    <Days
                        amount={this.state.daysLeft}
                        stylingShouldBeReset={this.state.timeUp}
                        style={timeUpStyles}
                    />
                    <Hours amount={this.state.hoursLeft} />
                    <Minutes amount={this.state.minutesLeft} />
                </div>
            </div>
        );
    }
}

export default CountDown;