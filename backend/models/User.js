 
import mongoose from "mongoose";
import validator from 'validator';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [30, "Your name cannot exceed 30 characters"]
      },
      phone: {
        type: String,
      },
      email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: {
          validator: function (value) {
            return validator.isEmail(value);
          },
          message: "Please enter a valid email address"
        }
      },
    password: {
        type: String,
        required: [true, "please enter your password"],

        minLength: [6, "your password can not be less than 6"],
        select:false
    },
    avator: {
       type:String
    },
    role:{
        type:String,
        default:'user'
    },
    status:{
      type:String,
      default:'0'
  },
  about_me:{
    type:String,
},
    created_at:{
        type:Date,
        default:Date.now
    },
    resetPasswprdToken:String,
    resetPasswprdExpire:Date,


})
// make hash the password
userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        next()
    }
this.password=await bcrypt.hash(this.password,10)
})
// create token
userSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE_TIME
    });
}
// compare user
userSchema.methods.comparePassword=async function(enteredPassword){
return await bcrypt.compare(enteredPassword,this.password);
}
// generate password reset token
userSchema.methods.getPasseordResetToken=function(){
    const resetToken=crypto.randomBytes(20).toString('hex');
    // hash and set resetToken
    this.resetPasswprdToken=crypto.createHash("sha256").update(resetToken).digest('hex');
    // set token expired time
    this.resetPasswprdExpire=Date.now()+30*60*1000
    return resetToken;
}
const User = mongoose.model("User", userSchema);
export default  User;