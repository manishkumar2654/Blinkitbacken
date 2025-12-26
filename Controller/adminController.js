const AdminModel = require("../Model/AdminLogin");
const productModel = require("../Model/productModel")

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../CloudinaryBlinkit');

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'BlinkitPhoto', // folder name Cloudinary account
        format: async (req, file) => 'jpg', // supports promises as well
        public_id: (req, file) => Date.now() + '-' + file.originalname,
    },
});



const upload = multer({ storage: storage }).array('images', 10);







const productSave = async(req, res) => {

 
  

   upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send("Error uploading files: " + err.message);
        }

      
        
           const { name, decription, price, category } = req.body;
           const imageUrls = req.files.map(file => file.path);
           
            
            const Product = await productModel.create({
                 name:name, 
                decription:decription, 
                price:price, 
                category:category,
                images:imageUrls,
                defaultImage:imageUrls[0]
            })
            res.status(200).send("Data saved successfully!");
        
    });
   
}



const AdminLogin = async (req, res) => {
  const { adminEmail, adminID, adminName, adminPassword } = req.body;
  const AdminLog = await AdminModel.findOne({ adminEmail: adminEmail });
  if (!AdminLog) {
    res.status(401).send({ msg: "Invalid Admin Email" });
  }

  if (AdminLog.adminPassword != adminPassword) {
    res.status(401).send({ msg: "Invalid Admin Password" });
  }

  res.status(200).send(AdminLog);
};



    



module.exports = {
  AdminLogin,
  productSave,
};
