var express = require('express');
var router = express.Router();
const request = require('request');
const fetch = require('node-fetch')
const con = require("../config/config")

/* part b. */
router.post('/', function (req, res, next) {
    return new Promise(((resolve, reject) => {
        request(con.endpoint, {
            method: "GET",
            qs: {q: req.body.city, appid: con.key}
        }, (err, response, body) => {
            // request("http://api.openweathermap.org/data/2.5/weather?q=boston&appid=5d5f6a4060d0b3632c9ccaf5ff1a9159",{method:"GET"},(err,response,body)=>{
            if (response.statusCode === 200) {
                resolve(body);
            } else {
                reject(response)
            }
        })
    })).then((result) => {
        res.render("index", {title: JSON.parse(result)})
    });
});

//part c
router.post('/', async function (req, res, next) {
    const fx = await fetch(con.endpoint + "?q=" + req.body.city + "&appid" + con.key, {
        method: "GET",
    })
    const result = await fx.json();
    res.render("index", {title: result})
})

//part d
router.post("/", function (req, res, next) {
    const delayed = function (callback) {
        request(con.endpoint, {
            method: "GET",
            qs: {q: req.body.city, appid: con.key}
        }, (err, response, body) => {
            if (response.statusCode === 200) {
                callback(body)
            }
            ;
        })
        delayed(function (body) {
            res.render("index", {title: JSON.parse(body)})
        })

    }
})


module.exports = router;