const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const connection = async () =>{
    try{
        const dbConnection = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.4o84c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        )
        console.log("Conexão bem sucedida no banco")
        return dbConnection
    }catch(error){
        console.log(error)
    }
}
connection()
module.exports = connection