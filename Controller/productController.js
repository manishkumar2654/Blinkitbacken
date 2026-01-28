const productModel = require("../Model/productModel");

// 🔹 Home page products
const displayAlldata = async (req, res) => {
  const productData = await productModel.find();
  res.send(productData);
};

// 🔹 Single product
const ProudctDisplay = async (req, res) => {
  const { id } = req.query;
  const productDisplay = await productModel.findById(id);
  res.send(productDisplay);
};

// 🔹 Candies & Gums category
const candyDisplay = async (req, res) => {
  try {
    const products = await productModel.find({
      category: "candies-gums",
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const snacksDisplay = async (req, res) => {
  try {
    const data = await productModel.find({ category: "snacks-munchies" });
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: "Server Error" });
  }
};





const dairyDisplay = async (req, res) => {
  try {
    const data = await productModel.find({ category: "dairy-bread-eggs" });
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: "Server Error" });
  }
};

const coldDrinksDisplay = async (req, res) => {
  try {
    const data = await productModel.find({ category: "cold-drinks-juices" });
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: "Server Error" });
  }
};


const chickenMeatFishDisplay = async (req,res)=>{
  try { const data = await productModel.find({category:"chicken-meat-fish"}); res.send(data); }
  catch(err){ res.status(500).send({error:"Server Error"}); }
};

const petCareDisplay = async (req,res)=>{
  try { const data = await productModel.find({category:"pet-care"}); res.send(data); }
  catch(err){ res.status(500).send({error:"Server Error"}); }
};

// Repeat same for other categories, e.g.
const babyCareDisplay = async (req,res)=>{ const data = await productModel.find({category:"baby-care"}); res.send(data); };
const magazinesDisplay = async (req,res)=>{ const data = await productModel.find({category:"magazines"}); res.send(data); };
const sweetToothDisplay = async (req,res)=>{ const data = await productModel.find({category:"sweet-tooth"}); res.send(data); };
const beautyCosmeticsDisplay = async (req,res)=>{ const data = await productModel.find({category:"beauty-cosmetics"}); res.send(data); };
const toysGamesDisplay = async (req,res)=>{ const data = await productModel.find({category:"toys-games"}); res.send(data); };
const vegetablesFruitsDisplay = async (req,res)=>{ const data = await productModel.find({category:"vegetables-fruits"}); res.send(data); };
const bakeryBiscuitsDisplay = async (req,res)=>{ const data = await productModel.find({category:"bakery-biscuits"}); res.send(data); };
const frozenDessertsDisplay = async (req,res)=>{ const data = await productModel.find({category:"frozen-desserts-icecream"}); res.send(data); };
const pharmaWellnessDisplay = async (req,res)=>{ const data = await productModel.find({category:"pharma-wellness"}); res.send(data); };
const personalCareDisplay = async (req,res)=>{ const data = await productModel.find({category:"personal-care"}); res.send(data); };
const digitalGoodsDisplay = async (req,res)=>{ const data = await productModel.find({category:"digital-goods"}); res.send(data); };
const cleaningEssentialsDisplay = async (req,res)=>{ const data = await productModel.find({category:"cleaning-essentials"}); res.send(data); };
const attaRiceDalDisplay = async (req,res)=>{ const data = await productModel.find({category:"atta-rice-dal"}); res.send(data); };
const paanshopDisplay = async (req,res)=>{ const data = await productModel.find({category:"paan-corner"}); res.send(data); };



// Controller/productController.js
// Search products (name, category, description)
// Search products (name, category, decription)
const searchProducts = async (req, res) => {
  try {
    const { q } = req.query;
    const data = await productModel.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
        { decription: { $regex: q, $options: "i" } }, // ✅ matches your model
      ],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




module.exports = {
  displayAlldata,
  ProudctDisplay,
  candyDisplay,
  snacksDisplay,
  dairyDisplay,
  coldDrinksDisplay,
  chickenMeatFishDisplay,
  petCareDisplay,
  babyCareDisplay,
  magazinesDisplay,
  sweetToothDisplay,
  beautyCosmeticsDisplay,
  toysGamesDisplay,
  vegetablesFruitsDisplay,
  bakeryBiscuitsDisplay,
  frozenDessertsDisplay,
  pharmaWellnessDisplay,
  personalCareDisplay,
  digitalGoodsDisplay,
  cleaningEssentialsDisplay,
  attaRiceDalDisplay,
  paanshopDisplay,
  searchProducts
  
  
  
  
  
};
