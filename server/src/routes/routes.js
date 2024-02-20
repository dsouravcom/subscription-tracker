const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.js");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = process.env.SECRET;

// register route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hash = bcrypt.hashSync(password, salt);
  try {
    await UserModel.create({ name, email, password: hash });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err.message);
    if (err.code === 11000) {
      return res.status(401).json({ message: "email already exists" });
    }
    res.status(500).json({ message: "server error" });
  }
});

// login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (bcrypt.compareSync(password, user.password)) {
      jwt.sign({ user }, secret, (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Failed to generate token" });
        }

        res.cookie("token", token).json({ status: "ok" });
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// profile route
router.get("/profile", async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, secret, (err, data) => {
    if (err) {
      return res.status(401).json({ message: "unauthorized" });
    }
    res.json(data);
  });
});

// logout route
router.post("/logout", (req, res) => {
  // res.cookie("token",'').json({ status: "ok" });
  res.cookie("token","token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/");


  // res.clearCookie('token');
});



module.exports = router;
