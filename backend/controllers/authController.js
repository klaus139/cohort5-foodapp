import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";




export const register =  async(req, res) => {
    try{
        const {username, email, password} = req.body;
        if(!username || !email || !password){
            throw new Error('Please fill in all the inputs')
        }
        const isExisting = await User.findOne({email})
        if(isExisting){
            throw new Error('Email already exists, please login')
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = await User.create({username, email,password:hashPassword})

        //const {password, ...others} = newUser._doc
        const token = jwt.sign({id: newUser._id, isAdmin:newUser.isAdmin}, process.env.JWT_SECRET, {expiresIn: '5h'});
        return res.status(201).json({message:"user registered successfully", newUser, token})
    }catch(error){
        return res.status(500).json(error.message)
    }
}

export const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email}) 
       if(!user){
          throw new Error("User credentials are wrong!")
       }

       // 123456, [lkoiuytfdrse5rd6tfgyhijopk[l;]'\[pkojiugyftdrzsdxtfycghu]]
       const comparePass = await bcrypt.compare(password, user.password)
       if(!comparePass){
        throw new Error("User credentials are wrong!")
       }

      
       const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET, {expiresIn: '5h'})

       return res.status(200).json({message:'user logged in successfully', user, token})
        
    }catch(error){
        return res.status(500).json(error.message)
    }
}

