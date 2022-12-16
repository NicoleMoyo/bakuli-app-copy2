const express = require("express");
const { UpdateWeight } = require("../controllers/UpdateUser");
const { SignUp, SignIn, ForgotPassword, ResetPassword, NewPassword } = require("../controllers/Users");

const router = express.Router();

// router.get("/", ) 
router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/forgotpassword", ForgotPassword);
router.get("/resetpassword/:username/:token", ResetPassword)
router.post("/resetpassword/:username/:token", NewPassword)
router.post("/dashboard/settings/updateweight/:username", UpdateWeight)
// router.post("/dashboard/home/:waterQuantity", UpdateWater)

module.exports = router; 