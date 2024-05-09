import Notification from '../models/Notification.js';
import catchValidationerrors from '../utils/validationErrors.js'
import ErrorHandller from "../utils/errorHandller.js";
// store notifications
const storeNotification = catchValidationerrors(async (req, res,next) => {
 console.log(req.body);
    const notification = await Notification.create(
       req.body
      )
      
      setTimeout(() => {
        
        res.status(200).json(notification);
      }, 1000);
    
  
  });
  // all notifications
  const allNotification = catchValidationerrors(async (req, res,next) => {
   
    const notifications = await Notification.find({user_id:req.user.id}).populate('property_id');
     
    // console.log(req.params.id);
    if (!notifications) {
        return next(new ErrorHandller("property not found",404));
        }
         
        const notificationCount = notifications.length;

        res.status(200).json({ count: notificationCount, notifications });
     
     });
  export {storeNotification,allNotification}