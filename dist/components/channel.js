"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get("/test_route", function (req, res) {
    res.status(200).json({
        error: true,
        messsage: "city name should be filled :("
    });
});
exports.default = router;
