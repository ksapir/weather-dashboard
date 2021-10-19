// Variables locating input areas and sections
var cityFormInput = $('#city-form');
var cityInputEl = $('#city');
var forecastTodayEl = $('#forecastToday');
var weatherInfoEl = $('#weatherInfo');
var searchEl = $('#fetchBtn');
var historyEl = $('#history');
var clearEl = $('#clear');

// Variable for current date
var dateToday = moment().format('M/D/YYYY');

// Variables for future 5 days
var momentEl1 = moment().add(1, 'day').format('M/D/YYYY');
var momentEl2 = moment().add(2, 'day').format('M/D/YYYY');
var momentEl3 = moment().add(3, 'day').format('M/D/YYYY');
var momentEl4 = moment().add(4, 'day').format('M/D/YYYY');
var momentEl5 = moment().add(5, 'day').format('M/D/YYYY');

// variables for local storage
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

// Hides weather information section on page load
weatherInfoEl.hide();

// Event handler listening for submitting the form
cityFormInput.on('submit', getWeatherToday);

function getWeatherToday(event) {
    // Prevents refreshing of page
    event.preventDefault();
    console.log('City:', cityInputEl.val());


    // Url used to grab API based on city inputted
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.val() + '&units=imperial&appid=b9906dda28b3c1ed70ea82d2cbf1483d';

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

            // Creates, appends and adds image for today's forecast
            var currentPicEl = $('<img>');
            let weatherPic = data.weather[0].icon;
            currentPicEl.attr("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
            currentPicEl.attr("alt", data.weather[0].description);
            forecastTodayEl.append(currentPicEl);

            // Creates, appends and adds text for today's temperature
            var tempToday = $('<p>');
            tempToday.text("Temp: " + data.main.feels_like + ' degrees');
            forecastTodayEl.append(tempToday);

            // Creates, appends and adds text for today's windspeed
            var windToday = $('<p>');
            windToday.text("Wind: " + data.wind.speed + " MPH");
            forecastTodayEl.append(windToday);

            // Creates, appends and adds text for today's humidity
            var humidityToday = $('<p>');
            humidityToday.text("Humidity: " + data.main.humidity + "%")
            forecastTodayEl.append(humidityToday);

            // var uvIndexToday = $('<p>');
            // uvIndexToday.text("UV Index: " + )
            cityInputEl.text('')
        });

    forecastTodayEl.text('')


// URL used to grab 5 day forecast
var requestUrl2 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInputEl.val() + '&units=imperial&appid=b9906dda28b3c1ed70ea82d2cbf1483d'

fetch(requestUrl2)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        // Appending appropriate date, time, wind and humidity for next 5 days
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
        }
        $('#date1').text(momentEl1);
        $('#img1').attr("src", "https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + "@2x.png");
        $('#img1').attr("alt", data.list[2].weather[0].main);
        $('#temp1').text('Temp: ' + data.list[2].main.temp + ' degrees');
        $('#wind1').text('Wind: ' + data.list[2].wind.speed + ' MPH');
        $('#humidity1').text('Humidity: ' + data.list[2].main.humidity + '%');

        $('#date2').text(momentEl2);
        $('#img2').attr("src", "https://openweathermap.org/img/wn/" + data.list[10].weather[0].icon + "@2x.png");
        $('#img2').attr("alt", data.list[10].weather[0].main);
        $('#temp2').text('Temp: ' + data.list[10].main.temp + ' degrees');
        $('#wind2').text('Wind: ' + data.list[10].wind.speed + ' MPH');
        $('#humidity2').text('Humidity: ' + data.list[10].main.humidity + '%');

        $('#date3').text(momentEl3);
        $('#img3').attr("src", "https://openweathermap.org/img/wn/" + data.list[18].weather[0].icon + "@2x.png");
        $('#img3').attr("alt", data.list[18].weather[0].main);
        $('#temp3').text('Temp: ' + data.list[18].main.temp + ' degrees');
        $('#wind3').text('Wind: ' + data.list[18].wind.speed + ' MPH');
        $('#humidity3').text('Humidity: ' + data.list[18].main.humidity + '%');

        $('#date4').text(momentEl4);
        $('#img4').attr("src", "https://openweathermap.org/img/wn/" + data.list[26].weather[0].icon + "@2x.png");
        $('#img4').attr("alt", data.list[26].weather[0].main);
        $('#temp4').text('Temp: ' + data.list[26].main.temp + ' degrees');
        $('#wind4').text('Wind: ' + data.list[26].wind.speed + ' MPH');
        $('#humidity4').text('Humidity: ' + data.list[26].main.humidity + '%');

        $('#date5').text(momentEl5);
        $('#img5').attr("src", "https://openweathermap.org/img/wn/" + data.list[34].weather[0].icon + "@2x.png");
        $('#img5').attr("alt", data.list[34].weather[0].main);
        $('#temp5').text('Temp: ' + data.list[34].main.temp + ' degrees');
        $('#wind5').text('Wind: ' + data.list[34].wind.speed + ' MPH');
        $('#humidity5').text('Humidity: ' + data.list[34].main.humidity + '%');
    })
};