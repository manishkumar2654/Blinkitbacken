const userModel = require("../Model/userLoginModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCreatSave = async (req, res) => {
  const { name, email, city, adders, pincode, phone, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const fun = await userModel.create({
    name: name,
    email: email,
    city: city,
    adders: adders,
    pincode: pincode,
    phone: phone,
    password: hashedPassword,
  });
  console.log(req.body);

  res.send("okya");
};

const userLoginCheck = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });

  try {
    const match = await bcrypt.compare(req.body.password, user.password);
    const accessToken = jwt.sign(
      JSON.stringify(user),
      process.env.TOKEN_SECRET
    );
    if (match) {
      res.json({ accessToken: accessToken });
    } else {
      res.json({ message: "Invalid Credentials" });
    }
  } catch (e) {
    console.log(e);
  }
};

const userAuthMan = async (req, res) => {
  const token = req.header("x-auth-token");


  if (!token) return res.json(false);
const verified = jwt.verify(token, process.env.TOKEN_SECRET);

if(!verified) return res.json(false);

  const user = await userModel.findById(verified._id);
  
  if(!user) return res.json(false);

  return res.json(user)
};


const getUserData = async (req, res) => {
  console.log(req.query.blinkiyusercheckoutid);
  const datastore = await userModel.findById(req.query.blinkiyusercheckoutid);
  res.send(datastore)
  
}
module.exports = {
  userCreatSave,
  userLoginCheck,
  userAuthMan,
  getUserData,
};
