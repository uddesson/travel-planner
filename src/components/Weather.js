import React from "react";
import Title from "./Title";

class Weather extends React.Component{

    state = {
        temperature: "",
        description: "",
        errorCaught: false
    }

    errorMessage = "";

    componentDidMount(){
        this.fetchWeather();
    }

    fetchWeather = () => {
        const key = "4bfbe202a7989b703e63a5a52ba0c29a";
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&lang=EN&APPID=${key}`)
            .then(response => response.json())
            .then((weather) => {
                let weatherDescription = weather.weather[0].description;
                let temperatureToRound = weather.main.temp;
                let averageTemp = Math.round(temperatureToRound);

                this.setState({ temperature: averageTemp, description: weatherDescription })
            })
            .catch(() => {
                this.errorMessage = "Sorry, no weather-data currently available.";
                this.setState({ errorCaught: true })
            })
    }

    render(){
        return(
            <div className="grid__item">
                <Title size={3} content="Weather" />

                {!this.state.errorCaught &&
                    <React.Fragment>
                        { this.state.temperature } ℃
                        <br/>
                        { this.state.description }
                    </React.Fragment>
                }
                {this.state.errorCaught &&
                    <React.Fragment>
                        <p className="u-error">{this.errorMessage}</p>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default Weather;
