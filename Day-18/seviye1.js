const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))