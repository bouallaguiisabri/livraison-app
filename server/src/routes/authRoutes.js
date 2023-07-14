const express = require("express");

const { createAdmin,
    loginAdmin,
    loginSuperAdmin,
    updatedAdmin,
    getAll,
    getOne,
    deleteOne, } = require("../controller/adminCtrl");
const router = express.Router();

router.post("/register", createAdmin);
router.post("/admin-login", loginAdmin);
router.post("/superadmin-login", loginSuperAdmin);
router.put("/:id", updatedAdmin);
router.get("/all-admin", getAll)
router.get("/:id", getOne)
router.delete ("/:id",deleteOne)

module.exports = router; 