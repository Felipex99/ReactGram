const express = require("express")
const { body } = require("express-validator")
const userCreateValidation = () =>{
    return [body("name")
                .isString()
                .withMessage("O nome é obrigatório")
                .isLength({min:3})
                .withMessage("O nome precisa ter no mínimo 3 caracteres"),
            body("email")
                .isString()
                .withMessage("O email é obrigatório")
                .isEmail()
                .withMessage("Insira um email válido"),
            body("password")
                .isString()
                .withMessage("A senha é obrigatória")
                .isLength({min:5})
                .withMessage("A senha deve conter pelo menos 5 números"),
            body("confirmPassword")
                .isString()
                .withMessage("A confirmação da senha é obrigatória")
                .custom((value, { req })=>{
                    if(value != req.body.password){
                        throw new Error("As senhas não são iguais") 
                    }
                    return true
                })
    ]
}

const loginValidation = ()=>{
    return[
        body("email")
            .isString()
            .withMessage("O email é obrigatório")
            .isEmail()
            .withMessage("Insira um email válido"),
        body("password")
            .isString()
            .withMessage("A senha é obrigatória")
    ]
}


module.exports = { userCreateValidation, loginValidation }