import React from "react";
import Title from "./Title";
import SingleParagraph from "./SingleParagraph";

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
                this.errorMessage = "Sorry, no weather-data is currently available.";
                this.setState({ errorCaught: true })
            })
    }

    render(){
        return(
            <div className="grid__item">
                <Title size={3} content="Current Weather" />

                {!this.state.errorCaught &&
                    <React.Fragment>
                        <SingleParagraph content={ this.state.temperature + "℃" }/>
                        <SingleParagraph content={ "And " + this.state.description } />
                    </React.Fragment>
                }

                {this.state.errorCaught &&
                    <SingleParagraph
                        className="u-error"
                        content={ this.errorMessage }
                    />
                }
            </div>
        );
    }
}

export default Weather;
