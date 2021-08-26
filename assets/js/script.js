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

// Variables for future 5 days
var momentEl1 = moment().add(1,'day').format('M/D/YYYY');
var momentEl2 = moment().add(2,'day').format('M/D/YYYY');
var momentEl3 = moment().add(3,'day').format('M/D/YYYY');
var momentEl4 = moment().add(4,'day').format('M/D/YYYY');
var momentEl5 = moment().add(5,'day').format('M/D/YYYY');

// variables for local storage
var lastCityEl = $('#lastCity');
var firstSaved = localStorage.getItem("last city")

var secondToLastCityEl = $('#secondToLastCity');
var secondSaved = localStorage.getItem("second to last city")

var thirdToLastCityEl = $('#thirdToLastCity');
var thirdSaved = localStorage.getItem("third to last city")

var fourthToLastCityEl = $('#fourthToLastCity');
var fourthSaved = localStorage.getItem("fourth to last city")


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
        cityFormInput.val()
        forecastTodayEl.val()
    });

    // URL used to grab 5 day forecast
    var requestUrl2 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInputEl.val() + '&units=imperial&appid=b9906dda28b3c1ed70ea82d2cbf1483d'
    
    fetch(requestUrl2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

// Appending appropriate date, time, wind and humidity for next 5 days
  $('#date1').text(momentEl1)
  $('#temp1').text('Temp: ' + data.list[2].main.temp + ' degrees')
  $('#wind1').text('Wind: ' + data.list[2].wind.speed + ' MPH')
  $('#humidity1').text('Humidity: ' + data.list[2].main.humidity + '%')

  $('#date2').text(momentEl2)
  $('#temp2').text('Temp: ' + data.list[10].main.temp + ' degrees')
  $('#wind2').text('Wind: ' + data.list[10].wind.speed + ' MPH')
  $('#humidity2').text('Humidity: ' + data.list[10].main.humidity + '%')

  $('#date3').text(momentEl3)
  $('#temp3').text('Temp: ' + data.list[18].main.temp + ' degrees')
  $('#wind3').text('Wind: ' + data.list[18].wind.speed + ' MPH')
  $('#humidity3').text('Humidity: ' + data.list[18].main.humidity + '%')

  $('#date4').text(momentEl4)
  $('#temp4').text('Temp: ' + data.list[26].main.temp + ' degrees')
  $('#wind4').text('Wind: ' + data.list[26].wind.speed + ' MPH')
  $('#humidity4').text('Humidity: ' + data.list[26].main.humidity + '%')

  $('#date5').text(momentEl5)
  $('#temp5').text('Temp: ' + data.list[34].main.temp + ' degrees')
  $('#wind5').text('Wind: ' + data.list[34].wind.speed + ' MPH')
  $('#humidity5').text('Humidity: ' + data.list[34].main.humidity + '%')
    })

localStorage.setItem("last city", cityInputEl.val())
var firstSaved = localStorage.getItem("last city")
lastCityEl.text(firstSaved)
console.log(firstSaved)

var previousCityBtnEl = $('#lastCity')
if (previousCityBtnEl){

}
}


// if (cityFormInput.click() = true)
// localStorage.setItem("second to last city", cityInputEl.val())
// var secondSaved = localStorage.getItem("second to last city")
// lastCityEl.text(secondSaved)
// console.log(secondSaved)

// if (cityFormInput.click() = true)
// localStorage.setItem("third to last city", cityInputEl.val())
// var thirdSaved = localStorage.getItem("third to last city")
// lastCityEl.text(thirdSaved)
// console.log(thirdSaved)

// if (cityFormInput.click() = true)
// localStorage.setItem("fourth to last city", cityInputEl.val())
// var fourthSaved = localStorage.getItem("fourth to last city")
// lastCityEl.text(fourthSaved)
// console.log(fourthSaved)




lastCityEl.text(firstSaved)
// secondToLastCityEl.text(secondSaved)
// thirdToLastCityEl.text(thirdSaved)
// fourthToLastCityEl.text(fourthSaved)

// Clears form of city input
cityInputEl.val("");


