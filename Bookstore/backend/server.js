const express =require('express');
const bcrypt = require ('bcryptjs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require ('cors')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const PORT = 5000;
const UserRoutes = require('./Routes/UserRoutes');
const RegisterController = require('./Controllers/UsersController');
const LoginController = require('./Controllers/UsersController')
const  GetProducts = require('./Controllers/ProductController');
const CartController = require('./Controllers/CartController');
const addToCart = require('./Controllers/CartController');
const getCartItems=require("../backend/Controllers/GetCart");



const app = express();
app.use(cors());
app.use(bodyParser.json());

//db connection
const dbconnection = async () =>{
    try{
        const connectdb = await mongoose.connect(process.env.MONGODB)
            
        console.log("db connected.....")
    }
    
    catch(error){
        console.log(`db error.....${error}`);
    }
};
dbconnection();


//Routes
const routes = express.Router()
routes.post('/api/register',RegisterController);
routes.get('/api/products',GetProducts);
routes.get('/api/login',LoginController);
routes.post('/cart/add', addToCart);
routes.get('/getcart', getCartItems);
// routes.post('/cart/remove', removeFromCart);
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});