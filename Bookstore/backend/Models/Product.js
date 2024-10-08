const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    imageIds:{
        type:String,
        required:true
    }

})

const Product = mongoose.model('Products',ProductSchema);
module.exports = Product;