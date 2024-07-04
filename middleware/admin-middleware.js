const adminMiddleware = (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      res.status(401).json({ message: "Access Denied ! User is not admin" });
    }
    next();
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = adminMiddleware;
