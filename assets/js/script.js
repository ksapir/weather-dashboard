var cityFormInput = $('#city-form');
var cityInputEl = $('#city');

var fetchBtnEl = $('#fetchBtn');

function handleFormSubmit(event) {
    event.preventDefault();  
    console.log('City:', cityInputEl.val())
};

cityFormInput.on('submit', handleFormSubmit);
console.log('hello')
// function getApi(){
// var requestUrl = 
// }