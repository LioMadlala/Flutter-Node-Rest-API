const e = require("express");

const constants = {
    opeoWeatherMaps:{
        BASE_URL: 'https://api.openweathermap.org/data/2.5/weather?q=', 
        SECRET_KEY: '795d81df6b4fe7a6c88ba4734772f897'
    },
    
    allcountriesMaps:{
        BASE_URL: 'https://restcountries.eu/rest/v2/all', 
        SECRET_KEY: ''
    },
    countriesMaps:{
        BASE_URL: 'https://restcountries.eu/rest/v2/name/', 
        SECRET_KEY: ''
    },
    productMaps:{
        BASE_URL: 'https://fakestoreapi.com/products/'
    }
}

module.exports = constants;