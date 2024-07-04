const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    const jwtToken = token.replace("Bearer", "").trim();
    const isverified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isverified.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not Provided !" });
  }
};

module.exports = authMiddleware;
