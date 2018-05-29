import React from 'react';
import SingleParagraph from './SingleParagraph';
import TextInput from './TextInput';

class Currency extends React.Component{

    state = {
        jpy: '',
        userInput: '',
        converted: 0,
        timeStamp: {
            date: '',
            time: ''
        },
        fade: true
    }

    componentDidMount(){
        this.fetchCurrency();
    }

    fetchCurrency = () => {
        const key = '73c2dc0085c6832db729eaacfb4c5c9e';

        fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=JPY`)
            .then(response => response.json())
            .then((currencyData) => {

                let jpy = currencyData.rates.JPY;

                let time = new Date().toLocaleTimeString();
                let date = new Date().toLocaleDateString();

                if(currencyData){
                    this.setState({jpy, timeStamp:{date, time}});
                }
            })
            .finally(() => {
                this.setState({fade:true})
            })
    }

    refresh = (event) => {
        event.preventDefault();

        // Fetch latest currency rate from API
        this.fetchCurrency();
        this.setState({fade: false})
    }

    convertUsersInput = (event) => {
        event.preventDefault();
        let userInput = event.target.value;
        this.setState({userInput})

        const calc = userInput * this.state.jpy;
        let converted = calc.toFixed(2);

        this.setState({converted})
    }

    render(){
        let shouldFade = this.state.fade ? 'u-fadeIn' : '';

        return(
            <div>
                <h3>Currency Exchange:</h3>

                <TextInput
                    htmlFor={"Currency"}
                    label={" EURO"}
                    value={this.state.userInput}
                    onChange={this.convertUsersInput}
                    placeholder="0"
                />

                <SingleParagraph
                    content={this.state.converted + ' JPY'}
                />

                <SingleParagraph
                    className="u-text-bold"
                    content="Currency exhange rate last updated:"
                />

                <SingleParagraph
                    className={shouldFade}
                    content={this.state.timeStamp.date + ' at ' + this.state.timeStamp.time}
                />

                {/* TODO: Make this to a icon-btn component */}
                <button onClick={this.refresh}>(Refresh)</button>

            </div>
        );
    }
}

export default Currency;