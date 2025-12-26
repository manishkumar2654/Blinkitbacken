const express = require("express");
const route = express.Router();
const productController = require("../Controller/productController")

route.get("/homedisplaydata",productController.displayAlldata );
route.get("/productdisplay",productController.ProudctDisplay );





module.exports =route;