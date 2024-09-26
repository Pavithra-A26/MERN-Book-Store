const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Cart', CartSchema);

// const mongoose = require('mongoose');
 
// const CartSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     price:{
//         type:Number,
//         required:true
//     },
//     imageIds:{
//         type:String,
//         required:true
//     }

// })

// const cart = mongoose.model('Cart',CartSchema);
// module.exports = cart;