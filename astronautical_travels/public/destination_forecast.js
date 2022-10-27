var cityMapper= {Europa:[-77.6554, 168.2227], Mzzixpa:[32.7153, -117.1573], TRAPPIST1e:[22.6783, -3.9836], Mars:[44.3683, -100.351]};

function getForecast(location) {
    //event.preventDefault();
    //const value = document.getElementById("weatherInput").value;
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
        console.log(response)
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
