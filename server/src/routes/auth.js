const router = require("express").Router();
const User = require("../data/models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(`${err.keyValue.email} already exist`); // checked manually for the error
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  // res.json("login");
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong password or email!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or email!");

    const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "5d",
    });

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    // res.status(500).json(err);
  }
});

module.exports = router;
