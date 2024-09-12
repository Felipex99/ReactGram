const mongoose = require("mongoose")
const {Schema} = mongoose

const photoSchema = new Schema({
    image:String,
    title:String,
    likes:Array,
    userId:mongoose.ObjectId,
    userName: String,
}, {timestamp:true})

const Photo = mongoose.model("Photo", photoSchema)
module.exports = Photo