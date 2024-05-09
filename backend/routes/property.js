import express from 'express'
import { isAuthenthicatheduser } from '../middleware/auth.js';
const router = express.Router();
import { upload } from '../uploadSingleFile.js';
import { addProperty, feturedProperty,deleteProperty,allProperties,
    createPropertyReview, getSingleproperty, myProperties } from '../controllers/PropertyController.js';
router.route('/add-property').post(isAuthenthicatheduser,upload.single('image'), addProperty);
router.route('/all-properties').get(allProperties);
router.route('/featured-properties').get(feturedProperty);
router.route('/property/:id').get(getSingleproperty);
router.route('/my-properties/:id').get(isAuthenthicatheduser,myProperties);
router.route('/delete-property').delete(isAuthenthicatheduser,deleteProperty);
router.route('/add-review').put(isAuthenthicatheduser,createPropertyReview);


export default router;  