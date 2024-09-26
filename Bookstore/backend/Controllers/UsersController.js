const User = require('../Models/User')
const bcrypt = require('bcryptjs')
 RegisterController = async(req,res) => {debugger;
    try{
        const {name,email,password} = req.body
    if(!name){
        return res.send({message:'name is required'})
    }
    if(!email){
        return res.send({message:'email is required'})
    }
    if(!password){
        return res.send({message:'password is required'})
    }

    const existinguser =await User.findone({email})
    if(existinguser){
        return res.status(400).json({message:"user already exist"});
    }

    const Hashedpassword = await bcrypt.hash(password,10);

    const newUser = await new User({name,email,password:Hashedpassword}).save()
    res.status(200).json({message:"User registerd successfully"});
}
catch(error){
    // res.status(500).json({message: "server error"})
    console.log(error);
}
}

const LoginController = async(req,res)=>{
    const{email,password} = req.body;
    try{
        const user = await User.findone({email});
        if(!user){
            res.send(400).json({message:"Invalid credentials"});
        }

        const match = await bcrypt.compare(password,user.password);

        if(!match){
            res.send(400).json({message:"Invalid credentials"});
        }

    }
    catch(e){
        res.send(500).json({message:"Internal Server Error"})
    }
}

module.exports= RegisterController,LoginController;