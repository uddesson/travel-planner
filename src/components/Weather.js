import React from 'react';

class Weather extends React.Component{

    state = {
        temperature: '',
        description: ''
      }

    componentDidMount(){
        this.fetchWeather();
    }

    fetchWeather = () => {
        const key = '4bfbe202a7989b703e63a5a52ba0c29a';
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&lang=EN&APPID=${key}`)
            .then(response => response.json())
            .then((weather) => {
                let weatherDescription = weather.weather[0].description;
                let temperatureToRound = weather.main.temp;
                let averageTemp = Math.round(temperatureToRound);

                this.setState({temperature: averageTemp, description: weatherDescription})
            })
    }

    render(){
        return(
            <div>
                { this.state.temperature} ℃
                <br/>
                {this.state.description }
            </div>
        );
    }
}

export default Weather;
