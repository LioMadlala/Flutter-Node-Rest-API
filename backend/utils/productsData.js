const request = require('request');
const constants = require('../config');
const weatherData = require('./weatherData');


const productData = (address, callback) =>{
    // const url = constants.productMaps.BASE_URL;
    console.log(address);
    const url = constants.productMaps.BASE_URL + encodeURIComponent(address);
    console.log(url);
    // callback(true);
    request({url, json: true}, (error, {body}) => {
        console.log(body);

        if(error){
            callback("Cant Fatch data from API", undefined);
        }else{
            // callback(undefined, {
            //     temparature: body.main.temp,
            //     desc: body.weather[0].description,
            //     cityName: body.name
            // })
            callback(undefined, {
                id: body.id,
                title: body.title,
                desc: body.description,
                category: body.category,
                image: body.image,
            })
        }
    })
}


module.exports = productData;