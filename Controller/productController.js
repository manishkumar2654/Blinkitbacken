const productModel = require("../Model/productModel");

const displayAlldata = async (req, res) => {
    const productData = await productModel.find();
    res.send(productData)
    
}


const ProudctDisplay =async (req, res) => {
    const { id } = req.query;
    const productDisplay = await productModel.findById(id)
    res.send(productDisplay)
    
}

module.exports={
    displayAlldata,
    ProudctDisplay
}