const express = require("express")
const router = express()
router.get("/", (req,res)=>{
    res.send("API working, sending response")
})

module.exports=router