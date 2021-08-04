// import express from 'express';
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000

const weatherData = require('../utils/weatherData');
// const countriesData = require('../utils/countriesData');
// const allcountriesData = require('../utils/countriesData');
const productData = require('../utils/productsData');

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

app.get('/products', (req, res)=>{
    const address = req.query.address;
    console.log(address);

    if(!address){
        return res.send({
            error : "You must provide the Address"
        } )
    }

    // productData(address, (result)=>{
    //     console.log(result);
    // })

    productData(address, (error, {id, title, desc, category, image}) => {
        if(error){
            return res.send({
                error
            })
        }

        console.log(id, title, desc, category, image);
        res.send({
            id, title, desc, category, image
        })
    });
   
})




app.get('*', (req, res)=>{
    res.send('Page not found');
})

app.listen(port, () =>{
    console.log("Server is up", port);
});


// app.get('/countries', (req, res) => {
    
//     const name = req.query.address;
//     console.log(name);

//     if(!name){
        
       
//     }
    
//     countriesData(name, (error, result) => {
//         if(error){
//             return res.send({
//                 error
//             })
//         }

//         // console.log(temparature, desc, cityName);
//         // res.send({
//         //     temparature,
//         //     desc,
//         //     cityName
//         // })
//     });
// })


// app.get('/countries/*', (req, res) => {
    
//     const name = req.query.address;
//     console.log(name);

//     allcountriesData(error => {
//         res.send("sfgsg");
//     })
  
//     // allcountriesData(error => {
//     //     if(error){
//     //         return res.send({
//     //             error
//     //         })
//     //     }
//     //     res.send("sfgsg");
//     //  })
// })



