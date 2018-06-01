import React from "react";
import SingleParagraph from "./SingleParagraph";
import TextInput from "./TextInput";
import Title from "./Title";
import UpdateButton from "./UpdateButton";

class Currency extends React.Component{

    state = {
        jpy: "",
        userInput: "",
        converted: "",
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
                let date = new Date().toLocaleDateString() + " ";

                if(currencyData){
                    this.setState({ jpy, timeStamp:{date, time}, errorCaught: false} );
                }
            })
            .catch((error) => {
                this.errorMessage = "Sorry, no currency-data is available at the moment.";
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
            let converted = calc.toFixed(0);

            this.setState({ converted })
        }
    }

    render(){
        const shouldFade = this.state.fade ? " u-fadeIn " : "";
        const errorStyles = this.state.errorCaught ? " u-error " : "";

        return(
            <div className="grid__item">
                <Title size={3} content="Currency Exchange:" />

                <TextInput
                    htmlFor={ "Currency" }
                    label={ " Enter a value: " }
                    value={ this.state.userInput }
                    className="u-block"
                    onChange={ this.convertUsersInput }
                    placeholder="How much?"
                />

                <SingleParagraph
                    content={this.state.userInput + " EURO => " + this.state.converted + " JPY" }
                />

                <SingleParagraph
                    className="u-text-bold"
                    content="Currency exchange rate last updated:"
                />

                <SingleParagraph
                    className={shouldFade + errorStyles}
                    content={this.state.timeStamp.date + this.state.timeStamp.time
                    || this.errorMessage}
                />

                <UpdateButton onClick={ this.refresh } />
            </div>
        );
    }
}

export default Currency;