import express from 'express'
import {isAuthenthicatheduser} from '../middleware/auth.js'
import { storeNotification,allNotification } from '../controllers/NotificationController.js';
const router = express.Router();
// // GET /users - Get all users
//  // GET /users - Get all users
router.route('/add-notification').post(storeNotification);
router.route('/notifications').get(isAuthenthicatheduser,allNotification);

 
  
export default router;  