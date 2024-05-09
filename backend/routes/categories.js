import express from 'express'
const router = express.Router();
import { upload } from '../uploadSingleFile.js';
import { addCategory ,allCategories} from '../controllers/CategoryController.js';
// // GET /users - Get all users
//  // GET /users - Get all users
router.route('/add-category').post(upload.single('image'),addCategory);
router.route('/all-categories').get(allCategories);

 
export default router;  