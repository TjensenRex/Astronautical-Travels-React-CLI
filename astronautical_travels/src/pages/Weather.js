//import ReactDOM from "react-dom/client";
import React from "react";
import { useState, useEffect } from 'react';
import moment from 'moment';

const Weather = () => {
    var cityMapper= {Europa:[-77.6554, 168.2227], Mzzixpa:[32.7153, -117.1573], TRAPPIST1e:[22.6783, -3.9836], Mars:[44.3683, -100.351]};
    const [weather, setWeather] = useState([]);
    const [planet, setPlanet] = useState([]);
    
    const getForecast = async(props) => {
        console.log(props);
        let lat = cityMapper[props][0]; //latitude
        let lon = cityMapper[props][1]; //longitude
        //console.log(value);
        const url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=253e5d8395632db1213de8bed9f0f097";
        //console.log(url);
        fetch(url)
        .then(function(response) {
            //console.log(response);
            return response.json();
        }).then(function(json) {
            let newArray = [];
            for (let i=3; i < json.list.length; i+=8) {
                newArray.push(json.list[i]);
            }
            setWeather(newArray);
            console.log(json);
        });
    };
    
    return(<div>
                <div className="DestinationButtons">
                    <button className="forecastButton" value="Mars" onClick={e => getForecast("Mars")}>
        		    	<h2 className="title">Mars</h2>
        		    </button>
        		    <button className="forecastButton" value="Europa" onClick={e => getForecast("Europa")}>
        		    	<h2 className="title">Europa</h2>
        		    </button>
        		    <button className="forecastButton" value="Mzzixpa" onClick={e => getForecast("Mzzixpa")}>
        		    	<h2 className="title">Mzzixpa</h2>
        		    </button>
        		    <button className="forecastButton" value="TRAPPIST1e" onClick={e => getForecast("TRAPPIST1e")}>
        		    	<h2 className="title">TRAPPIST1e</h2>
        		    </button>
    		    </div>
    		    <div className="forecast-flexbox">
    		    {weather.map(forecast => (
                    <Forecast forecast={forecast} ></Forecast>
                ))}
                </div>
		    </div>);
};

const Forecast = (props) => {
    const forecast = props.forecast;
    const imgUrl = "http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png"
    return (
        <div>
            <div class="forecast-innerbox">
	            <h2>{moment(forecast.dt_txt).format('MMMM Do YYYY, h:mm:ss a')}</h2>
	            <p>Expected Temperature: {forecast.main.temp} &deg;F</p>
	            <img src={imgUrl}/>
                <p>The wind speed will be {forecast.wind.speed} m/s.</p>
            </div>
        </div>
    );
}


export default Weather;
//<ForecastResults></ForecastResults>