const mongoose = require('mongoose')
const Bookschema=new mongoose.Schema({
    bookname:String,
    author:String,
    desc:String,
    image:String,
    cost:Number

})
const BookModel=mongoose.model("books",Bookschema)
module.exports=BookModel


