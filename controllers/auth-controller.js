const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const home = async (req, res) => {
  try {
    res.status(200).send({ Message: "Welcome to home page" });
  } catch (error) {
    res.status(400).send({ Message: "something went wrong" });
  }
};
const user = async (req, res) => {
  const user = await req.user;
  try {
    res.status(200).json({ data: user, Message: "Welcome to home page" });
  } catch (error) {
    res.status(400).send({ Message: "something went wrong" });
  }
};


const register = async (req, res) => {
  try {
    const { username, email, phone, password, isAdmin } = req.body;

    const saltRound = 10;

    const hash_password = await bcrypt.hash(password, saltRound);

    const data = {
      username,
      email,
      phone,
      password: hash_password,
      isAdmin,
    };

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ message: "email is already exist" });
    }

    const userCreated = await User.create(data);
    const jwtToken = await jwt.sign(data, "rajuporiya", { expiresIn: "30d" });
    res.status(201).send({ data: userCreated, token: jwtToken });
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ Message: "something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const saltRound = 10;

    const hash_password = await bcrypt.hash(password, saltRound);
    const emailCheck = await User.findOne({ email });

    const data = {
      email,
      password: hash_password,
      id: emailCheck._id.toString(),
    };

    if (!emailCheck) {
      return res.status(400).json({ message: "email not found !" });
    }

    const jwtToken = await jwt.sign(data, "rajuporiya", { expiresIn: "30d" });

    const user = await bcrypt.compare(password, emailCheck.password);

    if (user) {
      res.status(200).json({
        message: "Loggin sucessfully !",
        token: jwtToken,
        userId: emailCheck._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ Message: "internal server error" });
  }
};

module.exports = { home, register, login, user};
