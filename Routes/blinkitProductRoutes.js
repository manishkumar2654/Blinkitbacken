const express = require("express");
const route = express.Router();
const productController = require("../Controller/productController");

route.get("/homedisplaydata", productController.displayAlldata);
route.get("/productdisplay", productController.ProudctDisplay);
route.get("/candy", productController.candyDisplay);

module.exports = route;
