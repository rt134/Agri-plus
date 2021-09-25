const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const { name, email, password, passwordVerify } = req.body;
    if (!name || !email || !password || !passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    }
    if (password !== passwordVerify) {
      return res.status(400).json({ errorMessage: "Password doesnt match." });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ errorMessage: "An account with this email already exists." });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({ name, email, passwordHash });
    const savedUser = await newUser.save();
    console.log(savedUser);
    const token = jwt.sign(
      {
        user: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
      },
      process.env.JWT_SECRET
    );
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ errorMessage: "Wrong email or password." });
    }
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect) {
      return res.status(401).json({ errorMessage: "Wrong email or password." });
    }
    console.log(existingUser);
    const token = jwt.sign(
      {
        user: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
      process.env.JWT_SECRET
    );
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json(false);
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    data = {
      loggedIn: true,
      user: verified.user,
      username: verified.name,
      emailId: verified.email,
    };
    // console.log(data);
    res.send(data);
  } catch (err) {
    console.error(err)
    res.json(false);
  }
});
module.exports = router;
