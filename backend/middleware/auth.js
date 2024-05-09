import jwt from 'jsonwebtoken'
import catchValidationerrors from '../utils/validationErrors.js'
import ErrorHandller from "../utils/errorHandller.js";
import User from '../models/User.js';
const isAuthenthicatheduser=catchValidationerrors(async (req,res,next)=>{
    const {token}=req.cookies
    if(!token){
        return next(new ErrorHandller("LOGIN FIRST TO ACCESS THE RESOURCE",401))
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    req.user=await User.findById(decoded.id);
    next()
})
// handlling users roles
const authorizedRoles=(...roles)=>{
    return (req,res,next)=>{
if(!roles.includes(req.user.role)){
     return next(new ErrorHandller(`Role(${req.user.role}) is not allowed to access`,403))
}
next() 
    }
}
export {isAuthenthicatheduser,authorizedRoles}