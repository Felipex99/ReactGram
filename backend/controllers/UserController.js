const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET
//Gerar o token do usuario
const generateToken = (id)=>{
    return jwt.sign({id}, jwtSecret,{expiresIn:"7d"})
}


const register = async(req,res)=>{
    const {name, email, password, confirmPassword} = req.body
    //Checar se o usuário já existe
    const user = await User.findOne({email})
    if(user){
        res.status(422).json({errors:["Por favor utilizar outro email"]})
    }
    //GERAR O HASH PRO PASSWORD
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password,salt)

    //create user
    const newUser = await User.create({
        name,
        email,
        password:passwordHash
    })

    //se usuario for criado retorne o token
    if(!newUser){
        res.status(422).json(
            {errors:["Houve um erro por favor tente mais tarde"],}
        )
        return
    }

    res.status(201).json({
        id: user.id,
        token: generateToken(user._id)
    })
}
// SIGN USER IN
const login = async (req, res) =>{
    const {email, password} = req.body
    const user = await User.findOne({email})
    //Check if user exists
    if(!user){
        res.status(404).json({erros:["Usuário não encontrado"]})
        return
    }
    //check if password matches
    if(!(bcrypt.compare(password, user.password))){
        res.status(422).json({errors:[`${user.name} a senha está errada, por favor digite novamente`]})
        return
    }
    // retorna o usuário com token
    res.status(201).json({
        id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user._id)
    })
}

module.exports = {
    register,
    login
}