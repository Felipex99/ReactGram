const express = require("express")
const path = require("path")
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT
const app = express()
//configurar o json e os dados de resposta do form
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//Resolvendo CORS(ONDE FICA O FRONTEND)
app.use(cors({credentials:true, origin:"http://localhost:3000"}))
// UPLOAD DE IMAGENS
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))
//DB CONNECTION
require("./config/db.js")
//ROUTES
const router = require("./routes/Router.js")
app.use(router)
app.listen(port, ()=>{
    console.log(`APP RODANDO NA PORTA ${port}`)
})