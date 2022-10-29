var cityMapper= {Europa:[-77.6554, 168.2227], Mzzixpa:[32.7153, -117.1573], TRAPPIST1e:[22.6783, -3.9836], Mars:[44.3683, -100.351]};

const root = ReactDOM.createRoot(document.getElementById('forecastResults'));

function getForecast(location) {
    if (location === "") {
        return;
    }
    var cityName = location.getAttribute("cityName");
    let lat = cityMapper[cityName][0]; //latitude
    let lon = cityMapper[cityName][1]; //longitude
    //console.log(value);
    const url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=253e5d8395632db1213de8bed9f0f097";
    console.log(url);
    fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
    }).then(function(json) {
        console.log(json);
        let forecast = "<div class=\"forecast-flexbox\">";
        for (let i=3; i < json.list.length; i+=8) {
            forecast += "<div class=\"forecast-innerbox\">";
	            forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
	            forecast += "<p>Expected Temperature: " + json.list[i].main.temp + " &deg;F</p>";
	            forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
                forecast += "<p>The wind speed will be " + json.list[i].wind.speed +" m/s.</p>";
            forecast += "</div>";
        }
        forecast += "</div>";
        document.getElementById("forecastResults").innerHTML = forecast;
        console.log(json);
    });
};

class ForecastResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: "",
            json: {}
        };
        
        this.getForecast = this.getForecast.bind(this);
        console.log("constructor invoked.");
    }
    render() {
        console.log("rendering with planet " + this.state.planet);
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
    getForecast(props) {
        console.log("getForecast called with " + props);
        var cityName = props;
        let lat = cityMapper[cityName][0]; //latitude
        let lon = cityMapper[cityName][1]; //longitude
        var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=253e5d8395632db1213de8bed9f0f097";
        axios.get(url)
        .then(response => {
            console.log(response.data);
            this.state = {
                planet: cityName,
                json: response.data
            };
            
            root.render(<div>
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
                		    </div>
                            <div className="forecast-flexbox">
                                <div className="forecast-innerbox">
                                    <h2>{moment(this.state.json.list[3].dt_txt).format('MMMM Do YYYY, h:mm:ss a')}</h2>
                                    <p>Expected Temperature: {this.state.json.list[3].main.temp} &deg;F</p>
                                    <img src={"http://openweathermap.org/img/w/" + this.state.json.list[3].weather[0].icon + ".png"}/>
                                    <p>The wind speed will be {this.state.json.list[3].wind.speed} m/s</p>
                                </div>
                                <div className="forecast-innerbox">
                                    <h2>{moment(this.state.json.list[11].dt_txt).format('MMMM Do YYYY, h:mm:ss a')}</h2>
                                    <p>Expected Temperature: {this.state.json.list[11].main.temp} &deg;F</p>
                                    <img src={"http://openweathermap.org/img/w/" + this.state.json.list[11].weather[0].icon + ".png"}/>
                                    <p>The wind speed will be {this.state.json.list[11].wind.speed} m/s</p>
                                </div>
                                <div className="forecast-innerbox">
                                    <h2>{moment(this.state.json.list[19].dt_txt).format('MMMM Do YYYY, h:mm:ss a')}</h2>
                                    <p>Expected Temperature: {this.state.json.list[19].main.temp} &deg;F</p>
                                    <img src={"http://openweathermap.org/img/w/" + this.state.json.list[19].weather[0].icon + ".png"}/>
                                    <p>The wind speed will be {this.state.json.list[19].wind.speed} m/s</p>
                                </div>
                                <div className="forecast-innerbox">
                                    <h2>{moment(this.state.json.list[27].dt_txt).format('MMMM Do YYYY, h:mm:ss a')}</h2>
                                    <p>Expected Temperature: {this.state.json.list[27].main.temp} &deg;F</p>
                                    <img src={"http://openweathermap.org/img/w/" + this.state.json.list[27].weather[0].icon + ".png"}/>
                                    <p>The wind speed will be {this.state.json.list[27].wind.speed} m/s</p>
                                </div>
                                <div className="forecast-innerbox">
                                    <h2>{moment(this.state.json.list[35].dt_txt).format('MMMM Do YYYY, h:mm:ss a')}</h2>
                                    <p>Expected Temperature: {this.state.json.list[35].main.temp} &deg;F</p>
                                    <img src={"http://openweathermap.org/img/w/" + this.state.json.list[35].weather[0].icon + ".png"}/>
                                    <p>The wind speed will be {this.state.json.list[35].wind.speed} m/s</p>
                                </div>
                            </div>
                        </div>);
        });
    }
}
root.render(<ForecastResults></ForecastResults>)

