/*import ReactDOM from "react-dom/client";
import React from "react";

var cityMapper= {Europa:[-77.6554, 168.2227], Mzzixpa:[32.7153, -117.1573], TRAPPIST1e:[22.6783, -3.9836], Mars:[44.3683, -100.351]};

class ForecastResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: "",
            json: {}
        };
        
        this.getForecast = this.getForecast.bind(this);
    }
    render() {
        //console.log("rendering with planet " + this.state.planet);
        return (
            <div className="DestinationButtons">
                <button className="forecastButton" value="Mars" onClick={this.getForecast.bind(this, "Mars")}>
    		    	<h2 className="title">Mars</h2>
    		    </button>
    		    <button className="forecastButton" value="Europa" onClick={this.getForecast.bind(this, "Europa")}>
    		    	<h2 className="title">Europa</h2>
    		    </button>
    		    <button className="forecastButton" value="Mzzixpa" onClick={this.getForecast.bind(this, "Mzzixpa")}>
    		    	<h2 className="title">Mzzixpa</h2>
    		    </button>
    		    <button className="forecastButton" value="TRAPPIST1e" onClick={this.getForecast.bind(this, "TRAPPIST1e")}>
    		    	<h2 className="title">TRAPPIST1e</h2>
    		    </button>
		    </div>);
        
    }
}
const Weather = () => {
  return <ForecastResults></ForecastResults>;
};

export default Weather;*/