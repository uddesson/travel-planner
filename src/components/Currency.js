import React from 'react';

class Currency extends React.Component{

    state = {
        sek: '',
        jpy: ''
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

                this.setState({sek, jpy})
            })
    }


    render(){
        return(
            <div className="testborder">
                Currency:
                <p>1 EURO: </p>
                <p>{this.state.sek} SEK</p>
                <p>{this.state.jpy} JPY</p>
            </div>
        );
    }
}

export default Currency;