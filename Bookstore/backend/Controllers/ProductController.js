const Product = require('../Models/Product')

const GetProducts = async (req,res) => {
    try{
        const product = await Product.find();
        res.json(product);
    }
    catch(e){
        res.status(500).json({error:"Internal server error"});
    }   
}

module.exports = GetProducts;