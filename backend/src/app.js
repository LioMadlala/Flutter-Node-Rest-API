// import express from 'express';
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000

const weatherData = require('../utils/weatherData');

app.get('', (req, res)=>{
    res.send(('This is the Test app'));
})


//pass ?address=durban
app.get('/weather', (req, res) => {
    // res.send('This is the weather endpoint');
    const address = req.query.address;
    console.log(address);

    if(!address){
        return res.send({
            error : "You must provide the Address"
        } )
    }
    
    weatherData(address, (error, {temparature, desc, cityName}) => {
        if(error){
            return res.send({
                error
            })
        }

        console.log(temparature, desc, cityName);
        res.send({
            temparature,
            desc,
            cityName
        })
    });
})


app.get('*', (req, res)=>{
    res.send('Page not found');
})

app.listen(port, () =>{
    console.log("Server is up", port);
});


