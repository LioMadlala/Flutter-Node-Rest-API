const request = require('request');
const constants = require('../config');

const weatherData = (address, callback) => {
    const url = constants.opeoWeatherMaps.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.opeoWeatherMaps.SECRET_KEY
    // const url = 'https://api.openweathermap.org/data/2.5/weather?q=durban&appid=795d81df6b4fe7a6c88ba4734772f897'
    console.log(url);
    
    request({url, json: true}, (error, {body}) => {
        console.log(body);

        if(error){
            callback("Cant Fatch data from API", undefined);
        }else{
            callback(undefined, {
                temparature: body.main.temp,
                desc: body.weather[0].description,
                cityName: body.name
            })
        }
    })

}

module.exports = weatherData;

