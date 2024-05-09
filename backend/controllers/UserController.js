import User from "../models/User.js";
import catchValidationerrors from '../utils/validationErrors.js'
import ErrorHandller from "../utils/errorHandller.js";
import sendToken from "../utils/sendToken.js";
const getAllUsers = catchValidationerrors(async (req, res,next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    // Handle any errors that occur during the database query or response
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});
const login = catchValidationerrors(async (req, res,next) => {
  const {email,password}=req.body;
  
  if (!email) {
      return next(new ErrorHandller("Please fill the email field", 400))
  }
  if(!password){
    return next(new ErrorHandller("Please fill the password field", 400))
  }
    // find user from db
    const user = await User.findOne({ email }).select("+password")
    if (!user) {
        return next(new ErrorHandller('The Credentials Does not match!!', 401));
    }
  // check if passwrd is correct or not
  const check = await user.comparePassword(password);
  if (!check) {
      return next(new ErrorHandller('Invalid Email Or Password', 401));
  }
  setTimeout(() => {
    
    sendToken(user, 200, res);
  }, 1000);
});
// register
const register = catchValidationerrors(async (req, res,next) => {
    const {name,email,password}=req.body;
    const isUserExsit=await User.findOne({email})
    if(isUserExsit){
        return next(new ErrorHandller("Email already have been taken", 400))
    }
    if (!name) {
        return next(new ErrorHandller("Please fill the name field", 400))
    }
    if (!email) {
      return next(new ErrorHandller("Please fill the email field", 400))
  }
  if(!password){
    return next(new ErrorHandller("Please fill the password field", 400))
  }

      const user = await User.create({
          name,
          email,
          password,
      })
      
      setTimeout(() => {
        
        res.status(200).json(user);
      }, 1000);
    
  
  });
  // profile update
  const updateProfile = catchValidationerrors(async (req, res,next) => {
  //   if (!req.body.email) {
  //     return next(new ErrorHandller("Please fill the email field", 400))
  // }
  // if(!req.body.name){
  //   return next(new ErrorHandller("Please fill the password field", 400))
  // }
  if(!req.file){
    return next(new ErrorHandller("Please upload an avator", 400))
  }
    if(req.file){
      req.body.avator=req.file.filename;
    }
    try {
      // Find and update the user in one step
      const user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: true // Run Mongoose schema validators
      });
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
  
      // Log the updated user
      // console.log('Updated user:', user);
  
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
    
  
  });
// user profile
const user = catchValidationerrors(async (req, res, next) => {
  // console.log(req.cookies);
  const user = await User.findById(req.user.id);
  
  // console.log(req.body);
  res.status(200).json({
      success: true,
      user
  })
})
// update password
const changePassword = catchValidationerrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');
    console.log(req.body);
    // console.log(user);
    const isMatched = await user.comparePassword(req.body.oldPassword)
    if (!isMatched) {
        return next(new ErrorHandller("old password is incorrect", 400))
    }
    user.password = req.body.newPassword
    await user.save();
    sendToken(user, 200, res);
    
})
// logout

const logout = catchValidationerrors(async (req, res, next) => {
  res.clearCookie('token')
  res.cookie("token", null, {
      expires: new Date(0), // Set to a date in the past
      httpOnly: true
  });
  res.status(200).json({
      success: true,
      message: "Logged out successfully",
      user:null
  });
});
export { getAllUsers,register,login ,user,logout,updateProfile,changePassword};
