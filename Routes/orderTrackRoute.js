const express = require("express");
const route = express.Router();

const OrderModel = require("../Controller/orderTrackController")


route.post("/orderstrack",OrderModel.trackod )





module.exports =route;