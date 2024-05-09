import express from 'express'
import { getAllUsers,login,register, user,logout,updateProfile,changePassword } from '../controllers/UserController.js';
import {isAuthenthicatheduser} from '../middleware/auth.js'
import {upload} from '../uploadSingleFile.js'
const router = express.Router();
// // GET /users - Get all users
//  // GET /users - Get all users
router.route('/all-users').get(getAllUsers);
router.route('/user').get(isAuthenthicatheduser,user);
router.route('/updateProfile').post(isAuthenthicatheduser,upload.single('avator'),updateProfile);
router.route('/login').post(login);
router.route('/register').post(register);
router.route('/logout').get(isAuthenthicatheduser,logout);

router.route("/changePassword").put(isAuthenthicatheduser,changePassword);
  
export default router;  