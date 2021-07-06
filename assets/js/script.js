var cityFormInput = $('#city-form');
var cityInputEl = $('#city');
var forecastTodayEl = $('#forecastToday');
var weatherInfoEl = $('#weatherInfo');

var dateToday = moment().format('M/D/YYYY');
console.log(dateToday)

weatherInfoEl.hide();

cityFormInput.on('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();  
    console.log('City:', cityInputEl.val());

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.val() +'&appid=b9906dda28b3c1ed70ea82d2cbf1483d';

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);

    weatherInfoEl.show();

      var forecastTodayTitle = $('<h1>');
      forecastTodayTitle.text(cityInputEl.val() + dateToday);
      forecastTodayEl.append(forecastTodayTitle);


    });
    cityInputEl.val("");


}
