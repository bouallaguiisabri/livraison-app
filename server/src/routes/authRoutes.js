const express = require("express");

const { createAdmin,
    loginAdmin,
    loginSuperAdmin,
    updatedAdmin,
    getAll,
    getOne,
    deleteOne, } = require("../controller/adminCtrl");
const { authMiddleware, isAdmin, } = require("../middlaware/authMiddleware");
const router = express.Router();

router.post("/register", createAdmin);
router.post("/admin-login", loginAdmin);
router.post("/superadmin-login", loginSuperAdmin);
router.put("/update",authMiddleware, updatedAdmin);
router.get("/all-admin", getAll)
router.get("/:id",authMiddleware,isAdmin, getOne)
router.delete ("/:id",deleteOne)

module.exports = router; 