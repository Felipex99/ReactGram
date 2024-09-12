const express = require("express")
const router = express.Router()
//controller
const { register } = require("../controllers/UserController")
//Middlewares
const validate = require("../middleware/handleValidation")
const { userCreateValidation } = require("../middleware/userValidation")
//ROUTES
router.post("/register", userCreateValidation(), validate, register)


module.exports = router