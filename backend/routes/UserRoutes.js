const express = require("express")
const router = express.Router()
//controller
const { register, login } = require("../controllers/UserController")

//Middlewares
const validate = require("../middleware/handleValidation")
const { userCreateValidation, loginValidation } = require("../middleware/userValidation")

//ROUTES
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)

module.exports = router