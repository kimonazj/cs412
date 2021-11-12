var express = require('express');
var router = express.Router();
const request = require('request');
const fetch = require('node-fetch')
const con = require("../config/config")

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const existsAsync = promisify(client.exists).bind(client);
const setAsync = promisify(client.set).bind(client);
const expireAsync = promisify(client.expire).bind(client);


//Redis hw used PS4 part c
router.post('/', async function (req, res, next) {
    let loc = req.body.city;

    if (await existsAsync(loc)) {
        let locData = await getAsync(loc);
        let response = {
            locData: locData,
            cached: true
        }
        res.send(response);

    }else{
        const fx = await fetch(con.endpoint + "?q=" + req.body.city + "&appid" + con.key, {
            method: "GET",
        })
        const locData = await fx.json();

        await setAsync(loc, JSON.stringify(locData));
        let response = {
            locData: locData,
            cached: false
        }
        await expireAsync(loc, 15);
        res.send(response)
    }
})




module.exports = router;