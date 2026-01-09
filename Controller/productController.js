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

module.exports = {
  displayAlldata,
  ProudctDisplay,
  candyDisplay,
};
