const mongoose=require('mongoose')
const sellSchema=new mongoose.Schema({
    username:String,
    bookname:String,
    author:String,
    desc:String,
    cost:Number
})

const sellModel=mongoose.model("newbook",sellSchema)
module.exports=sellModel