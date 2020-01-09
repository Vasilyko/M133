var express = require('express');

const app = express();

var router = express.Router();

var fs = require('fs');
var Cart = require('../models/cart');

app.listen(8080, () => {
    console.log("Server started at http://localhost:8080");
});