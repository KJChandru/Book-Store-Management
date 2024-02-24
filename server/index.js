const UserModel=require('./Model/UserModel')
const BookModel=require('./Model/BookModel')
const sellModel=require('./Model/SellBook')
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const CheckoutModel = require('./Model/CheckoutModel')


const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/BookStore")

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
})
// New User
app.post('/reg',(req,res) => {
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
//login user

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email })
        .then(user => {
            if (user) {
                if(user.email== "admin@gmail.com" && user.password==password)
                {
                    res.json("admin")
                }
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Password not matched");
                }
            } else {
                res.json("User not found");
            }
        })
        .catch(err => res.json(err));
});
// list customer
app.get('/customer',async(req,res)=>{
    
    sellModel.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
    
});

//upload new book
app.post('/uploadbook',(req,res)=>{
    BookModel.create(req.body)
    .then(book=>res.json(book))
    .catch(err=>res.json(err))
})

//print books
app.get('/purchase',(req,res)=>{
    BookModel.find()
    .then(book=>res.json(book))
    .catch(err=>res.json(err))
})
// available books

app.get('/books',(req,res)=>{
    BookModel.find()
    .then(book=>res.json(book))
    .catch(err=>res.json(err))
})

//sellbook
app.post('/sell',(req,res)=>{
  sellModel.create(req.body)
  .then(newbook=>res.json(newbook))
  .catch(err=>res.json(err))
})

// print book by id
app.get('/purchase/:id', (req, res) => {
    const bookId = req.params.id;
    BookModel.findById(bookId)
        .then(book => {
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ message: "Book not found" });
            }
        })
        .catch(err => res.status(500).json({ message: err.message }));
});
// fetch name
app.get('/login/:email',(req,res)=>{
    const email=req.params.email;
    UserModel.findOne({email})
    .then(user=>{
        if(user){
            res.json(user.name);
        }else{
            res.status(404)
        }
    })
    .catch(err => res.status(500).json({ message: err.message }));
})

// confirm booking
app.post('/checkout',(req,res)=>{
    CheckoutModel.create(req.body)
    .then(sellbook=>res.json(sellbook))
    .catch(err=>res.json(err))
})

app.listen(4000,()=>{
    console.log("Server Running")
})