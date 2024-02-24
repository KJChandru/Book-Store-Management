const mongoose=require('mongoose')
const checkoutSchema=new mongoose.Schema({
    
    bookname:String,
    author:String,
    cost:Number
})

const CheckoutModel=mongoose.model("soldbooks",checkoutSchema)
module.exports=CheckoutModel