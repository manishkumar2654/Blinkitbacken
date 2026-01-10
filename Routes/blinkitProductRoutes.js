const express = require("express");
const route = express.Router();
const productController = require("../Controller/productController");

route.get("/homedisplaydata", productController.displayAlldata);
route.get("/productdisplay", productController.ProudctDisplay);
//candy
route.get("/candy", productController.candyDisplay);

// Snacks & Munchies
route.get("/snacks", productController.snacksDisplay);

// Dairy, Bread & Eggs
route.get("/dairy", productController.dairyDisplay);



// Cold Drinks & Juices
route.get("/cold-drinks", productController.coldDrinksDisplay);
route.get("/chicken-meat-fish", productController.chickenMeatFishDisplay);
route.get("/pet-care", productController.petCareDisplay);
route.get("/baby-care", productController.babyCareDisplay);
route.get("/magazines", productController.magazinesDisplay);
route.get("/sweet-tooth", productController.sweetToothDisplay);
route.get("/beauty-cosmetics", productController.beautyCosmeticsDisplay);
route.get("/toys-games", productController.toysGamesDisplay);
route.get("/vegetables-fruits", productController.vegetablesFruitsDisplay);
route.get("/bakery-biscuits", productController.bakeryBiscuitsDisplay);
route.get("/frozen-desserts-icecream", productController.frozenDessertsDisplay);
route.get("/pharma-wellness", productController.pharmaWellnessDisplay);
route.get("/personal-care", productController.personalCareDisplay);
route.get("/digital-goods", productController.digitalGoodsDisplay);
route.get("/cleaning-essentials", productController.cleaningEssentialsDisplay);
route.get("/atta-rice-dal", productController.attaRiceDalDisplay);
route.get("/pann", productController.paanshopDisplay);






module.exports = route;
