var cityFormInput = $('#city-form');
var cityInputEl = $('#city');


var fetchBtnEl = $('#fetchBtn');

var dateToday = moment().format('M/D/YYYY');
console.log(dateToday)


function handleFormSubmit(event) {
    event.preventDefault();  
    console.log('City:', cityInputEl.val())

    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.val() +'&appid=b9906dda28b3c1ed70ea82d2cbf1483d'

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
    cityInputEl.val("")
}

cityFormInput.on('submit', handleFormSubmit);
