const express = require("express");
const route = express.Router();
const userController = require("../Controller/userController")



route.post("/registration" , userController.userCreatSave)
route.post("/logincheck" , userController.userLoginCheck)
route.post("/authonchek" , userController.userAuthMan)
route.get("/getuserdataforcheckout", userController.getUserData)



module.exports =route;