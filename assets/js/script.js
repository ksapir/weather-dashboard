// Variables locating input areas and sections
var cityFormInput = $('#city-form');
var cityInputEl = $('#city');
var forecastTodayEl = $('#forecastToday');
var weatherInfoEl = $('#weatherInfo');

var dateDisplayArray = [
    $('#date1'),
    $('#date2'),
    $('#date3'),
    $('#date4'),
    $('#date5'),
]

// Variable for current date
var dateToday = moment().format('M/D/YYYY');

var momentEl1 = moment().add(1,'day').format('M/D/YYYY');
var momentEl2 = moment().add(2,'day').format('M/D/YYYY');
var momentEl3 = moment().add(3,'day').format('M/D/YYYY');
var momentEl4 = moment().add(4,'day').format('M/D/YYYY');
var momentEl5 = moment().add(5,'day').format('M/D/YYYY');

console.log(momentEl5)

var momentsArray = {
    momentEl1,
    momentEl2,
    momentEl3,
    momentEl4,
    momentEl5,
}

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

        // Shows weather info section once data is generated
        weatherInfoEl.show();

        // Creates, appends and adds text for today's forecast
        var forecastTodayTitle = $('<h1>');
        forecastTodayTitle.text(cityInputEl.val() + ' ' + dateToday);
        forecastTodayEl.append(forecastTodayTitle);

        // Creates, appends and adds text for today's temperature
        var tempToday = $('<p>');
        tempToday.text("Temp: " + data.main.feels_like +' degrees');
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

    // URL used to grab 5 day forecast
    var requestUrl2 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInputEl.val() + '&units=imperial&appid=b9906dda28b3c1ed70ea82d2cbf1483d'
    
    fetch(requestUrl2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

// Appending appropriate date, time, wind and humidity for next 5 days

  $('#temp1').text('Temp: ' + data.list[2].main.temp + ' degrees')
  $('#wind1').text('Wind: ' + data.list[2].wind.speed + ' MPH')
  $('#humidity1').text('Humidity: ' + data.list[2].main.humidity + '%')

  $('#temp2').text('Temp: ' + data.list[10].main.temp + ' degrees')
  $('#wind2').text('Wind: ' + data.list[10].wind.speed + ' MPH')
  $('#humidity2').text('Humidity: ' + data.list[10].main.humidity + '%')

  $('#temp3').text('Temp: ' + data.list[18].main.temp + ' degrees')
  $('#wind3').text('Wind: ' + data.list[18].wind.speed + ' MPH')
  $('#humidity3').text('Humidity: ' + data.list[18].main.humidity + '%')

  $('#temp4').text('Temp: ' + data.list[26].main.temp + ' degrees')
  $('#wind4').text('Wind: ' + data.list[26].wind.speed + ' MPH')
  $('#humidity4').text('Humidity: ' + data.list[26].main.humidity + '%')

  $('#temp5').text('Temp: ' + data.list[34].main.temp + ' degrees')
  $('#wind5').text('Wind: ' + data.list[34].wind.speed + ' MPH')
  $('#humidity5').text('Humidity: ' + data.list[34].main.humidity + '%')
    })
}


// Clears form of city input
cityInputEl.val("");


