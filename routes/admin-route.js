const express = require("express");

const router = express.Router();
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const {
  adminUser,
  adminContact,
  getuserById,
  updateuserById,
  deleteuserById,
  deletecontactById
} = require("../controllers/admin-controller");

router.route("/user").get(authMiddleware, adminMiddleware, adminUser);
router.route("/contact").get(authMiddleware, adminMiddleware, adminContact);
router.route("/user/:id").get(authMiddleware, adminMiddleware, getuserById);
router
  .route("/userupdate/:id")
  .patch(authMiddleware, adminMiddleware, updateuserById);
router
  .route("/user/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteuserById);
router
  .route("/contact/delete/:id")
  .delete(authMiddleware, adminMiddleware, deletecontactById);

module.exports = router;
