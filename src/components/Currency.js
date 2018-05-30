import React from "react";
import SingleParagraph from "./SingleParagraph";
import TextInput from "./TextInput";

class Currency extends React.Component{

    state = {
        jpy: "",
        userInput: "",
        converted: 0,
        timeStamp: {
            date: "",
            time: ""
        },
        fade: true,
        errorCaught: false
    }

    errorMessage = "";

    componentDidMount(){
        this.fetchCurrency();
    }

    fetchCurrency = () => {
        const key = "73c2dc0085c6832db729eaacfb4c5c9e";

        fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=JPY`)
            .then(response => response.json())
            .then((currencyData) => {

                let jpy = currencyData.rates.JPY;

                let time = new Date().toLocaleTimeString();
                let date = new Date().toLocaleDateString();

                if(currencyData){
                    this.setState({ jpy, timeStamp:{date, time}} );
                }
            })
            .catch((error) => {
                this.errorMessage = "Sorry, no data currently available.";
                this.setState({ errorCaught: true });
            })
            .finally(() => {
                this.setState({ fade: true })
            })
    }

    refresh = (event) => {
        event.preventDefault();

        /* Set fade-animation to false so the class triggering it
        can be added again, making elements fade in on refresh */
        this.setState({ fade: false })

        // Fetch latest currency rate from API
        this.fetchCurrency();
    }

    convertUsersInput = (event) => {
        event.preventDefault();
        let userInput = event.target.value;

        // Don't convert user input when error is caught
        if(this.state.errorCaught){
            this.setState({ userInput: "" })
        } else {
            this.setState({ userInput })

            const calc = userInput * this.state.jpy;
            let converted = calc.toFixed(2);

            this.setState({ converted })
        }
    }

    render(){
        const shouldFade = this.state.fade ? " u-fadeIn " : "";
        const errorStyles = this.state.errorCaught ? " u-error " : "";

        return(
            <div>
                <h3>Currency Exchange:</h3>

                <TextInput
                    htmlFor={ "Currency" }
                    label={ " EURO" }
                    value={ this.state.userInput }
                    onChange={ this.convertUsersInput }
                    placeholder="Enter value"
                />

                <SingleParagraph
                    content={ this.state.converted + " JPY" }
                />

                <SingleParagraph
                    className="u-text-bold"
                    content="Currency exhange rate last updated:"
                />

                <SingleParagraph
                    className={shouldFade + errorStyles}
                    content={this.state.timeStamp.date + this.state.timeStamp.time
                    || this.errorMessage}
                />

                {/* TODO: Make this to a icon-btn component */}
                <button onClick={ this.refresh }>(Refresh)</button>

            </div>
        );
    }
}

export default Currency;