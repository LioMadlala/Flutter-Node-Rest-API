const request = require('request');
const constants = require('../config');

// const countriesData = (name, callback) => {
//     const url = constants.countriesMaps.BASE_URL + encodeURIComponent(name)
//     // const url = 'https://api.openweathermap.org/data/2.5/weather?q=durban&appid=795d81df6b4fe7a6c88ba4734772f897'
//     console.log(url);
    
//     // request({url, json: true}, (error, {body}) => {
//     //     console.log(body);
//     //     // callback(yes);

//     //     // if(error){
//     //     //     callback("Cant Fatch data from API", undefined);
//     //     // }else{
//     //     //     callback(undefined, {
//     //     //         temparature: body.main.temp,
//     //     //         desc: body.weather[0].description,
//     //     //         cityName: body.name
//     //     //     })
//     //     // }
//     // })


// }
// const allcountriesData = () => {
//     const url = constants.allcountriesMaps.BASE_URL
    
//     console.log(url);
    
//     // request({url, json: true}, (error, {body}) => {
//     //     console.log(body);
//     //     // callback(yes);
        
//     //     // if(error){
//     //     //     callback("Cant Fatch data from API", undefined);
//     //     // }else{
//     //     //     callback(undefined, {
//     //     //         temparature: body.main.temp,
//     //     //         desc: body.weather[0].description,
//     //     //         cityName: body.name
//     //     //     })
//     //     // }
//     // })

// }

module.exports = allcountriesData;
module.exports = countriesData;

