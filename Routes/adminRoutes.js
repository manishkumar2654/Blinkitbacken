const express = require("express");
const route = express.Router();
const AdminController = require("../Controller/adminController");

route.post("/adminlogin", AdminController.AdminLogin)
route.post("/productsave", AdminController.productSave)







module.exports=route;