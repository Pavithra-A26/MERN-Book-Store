const Cart=require("../Models/Cart")


const getCartItems = async (req, res) => {
    try {debugger;
        const cartItems = await Cart.find(); // Adjust the query logic as needed
        res.status(200).json(cartItems); // 200 OK response with cart data
    } catch (err) {
        res.status(500).json({ error: 'Server Error' }); // Handle server-side errors
    }
};

module.exports=getCartItems;