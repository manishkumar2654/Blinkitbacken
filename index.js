const express = require("express");
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose= require("mongoose");
require('dotenv').config();
const paymentRoutes = require("./Routes/payment");
const AdminRoute = require("./Routes/adminRoutes");
const BlinkitProductRoute =require("./Routes/blinkitProductRoutes")
 const userRoute =require("./Routes/userRoutes")
 const orderTrackRoute = require("./Routes/orderTrackRoute")

const Port=process.env.PORT || 8080;
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connected Succefully!")
})




app.get("/", (req, res) => {
  res.send("Backend is running!");
});
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())



app.use("/admin", AdminRoute);
app.use("/blinkitproduct", BlinkitProductRoute)
app.use("/user", userRoute)
app.use("/api/payment", paymentRoutes)
app.use("/admintrakorder", orderTrackRoute)



app.listen(Port, ()=>{
    console.log(`Server Run On Port ${Port}`);
})