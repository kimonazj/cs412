var express = require('express');
var router = express.Router();


router.route("/")
    //part B GET function
    .get((req, res, next) => {
        res.render("ps3", {title: "this is a return for part b"})
    })

    //part C POST function (key should be name)
    .post((req, res, next) => {
        res.render("ps3", {title: req.body.name, len: req.body.name.length})
    });

//part D GET function
router.get("/names/:name", ((req, res, next) => {
    res.render("ps3", {title: req.params.name, len: req.params.name.length})
}));

module.exports = router;