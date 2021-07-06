// Variables locating input areas and sections
var cityFormInput = $('#city-form');
var cityInputEl = $('#city');
var forecastTodayEl = $('#forecastToday');
var weatherInfoEl = $('#weatherInfo');

// Variable for current date
var dateToday = moment().format('M/D/YYYY');

// Hides weather information section on page load
weatherInfoEl.hide();

// Event handler listening for submitting the form
cityFormInput.on('submit', handleFormSubmit);

function handleFormSubmit(event) {
    // Prevents refreshing of page
    event.preventDefault();  
    console.log('City:', cityInputEl.val());

    // Url used to grab API based on city inputted
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.val() +'&units=imperial&appid=b9906dda28b3c1ed70ea82d2cbf1483d';

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data)

        // Shows weather info section once data is generated
        weatherInfoEl.show();

        // Creates, appends and adds text for today's forecast
        var forecastTodayTitle = $('<h1>');
        forecastTodayTitle.text(cityInputEl.val() + ' ' + dateToday);
        forecastTodayEl.append(forecastTodayTitle);

        // Creates, appends and adds text for today's temperature
        var tempToday = $('<p>');
        tempToday.text("Temp: " + data.main.feels_like);
        forecastTodayEl.append(tempToday);

        // Creates, appends and adds text for today's windspeed
        var windToday= $('<p>');
        windToday.text("Wind: " + data.wind.speed + " MPH");
        forecastTodayEl.append(windToday);

        // Creates, appends and adds text for today's humidity
        var humidityToday = $('<p>');
        humidityToday.text("Humidity: " + data.main.humidity + "%")
        forecastTodayEl.append(humidityToday);

        // var uvIndexToday = $('<p>');
        // uvIndexToday.text("UV Index: " + )
    
    });
}

// Clears form of city input
cityInputEl.val("");


