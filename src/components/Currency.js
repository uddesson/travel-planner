import React from 'react';
import SingleParagraph from './SingleParagraph';

class Currency extends React.Component{

    state = {
        sek: '',
        jpy: '',
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

        fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=SEK,JPY`)
            .then(response => response.json())
            .then((currencyData) => {
                /* I convert the numbers to strings with only two decimals,
                using toFixed() */
                let sek = currencyData.rates.SEK.toFixed(2);
                let jpy = currencyData.rates.JPY.toFixed(2);

                let time = new Date(currencyData.timestamp*1000).toLocaleTimeString();
                let date = currencyData.date

                if(currencyData){
                    this.setState({sek, jpy, timeStamp:{date, time}});
                }
            })
            .finally(() => {this.setState({fade:true})})
    }


    refresh = (event) => {
        event.preventDefault();
        this.fetchCurrency();
        this.setState({fade: false})
    }

    render(){
        let shouldFade = this.state.fade ? 'u-fadeIn' : '';

        return(
            <div>
                <h3>Currency:</h3>
                <SingleParagraph content={'1 Euro ='}/>

                <SingleParagraph
                    className={shouldFade}
                    content={this.state.sek + ' SEK'}
                />
                <SingleParagraph
                    className={shouldFade}
                    content={this.state.jpy + ' JPY'}
                />
                <SingleParagraph
                    className="u-text-bold"
                    content="Last updated:" />

                {/* TODO: Make this to a icon-btn component */}
                <button onClick={this.refresh}>(Refresh)</button>

                <SingleParagraph
                    className={shouldFade}
                    content={this.state.timeStamp.time}
                />

                 <SingleParagraph
                    className={shouldFade}
                    content={this.state.timeStamp.date}
                />
            </div>
        );
    }
}

export default Currency;