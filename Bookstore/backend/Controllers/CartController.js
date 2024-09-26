// controllers/CartController.js
const Cart = require('../Models/Cart');
const Pmodel = require('../Models/Product');

// Add product to cart
const addToCart = async (req, res) => {
      try{
        const {id:productId}=req.body;
        if(!productId){
            res.status(400).json({message:"id not found!"})
        }
        const gcart=await Pmodel.findById(productId)
        if(!gcart){
            res.status(401).json({message:"product not found"})
        }
        const cartItem=await Cart.create({
        
            imageIds:gcart.imageIds,
            name:gcart.name,
            price:gcart.price
        })
        
        // console.log("Product added successfully!",cartItem)
        res.status(201).json({ message: 'Product added to cart successfully', cartItem });


      }catch(err){
        console.log("Internal server error")
      }

    
};



// Remove product from cart
const removeFromCart = async (req, res) => {
    try {
        const { id } = req.body; // Assuming id is the Cart item ID
        await Cart.findByIdAndDelete(id);
        res.status(200).json({ message: 'Product removed from cart' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports =  addToCart, removeFromCart ;
