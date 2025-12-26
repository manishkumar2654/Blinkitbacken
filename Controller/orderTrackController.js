
const orderModel =require("../Model/OrderModel")


const trackod = async (req, res) => {

    const orderss = await orderModel.find()
   
    
    res.send(orderss)
    
}

module.exports = {
    trackod
}