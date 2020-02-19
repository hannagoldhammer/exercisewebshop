// Här ska vi definera vår server 
const express = require("express");
const app = express();
const port = 8080
const config = require("../config/config")
const mongoose = require("mongoose")

app.get("/", (req, res) => {
    res.send("Hello world")
})


module.exports = {app, port, config};