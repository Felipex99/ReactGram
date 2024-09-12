const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET
//Gerar o token do usuario
const generateToken = (id)=>{
    return jwt.sign({id}, jwtSecret,{expiresIn:"7d"})
}
//Registra usuário e sign in
const register = async (req, res)=>{
    res.send("API DE REGISTRO DE USUÁRIO")
}

module.exports = {register,}