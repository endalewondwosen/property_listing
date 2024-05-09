import Property from '../models/Property.js';
import catchValidationerrors from '../utils/validationErrors.js'
import ErrorHandller from "../utils/errorHandller.js";
import APIFeatures from '../utils/apifeatures.js'
const addProperty = catchValidationerrors(async (req, res, next) => {
     if(req.user){
         if(req.user.role=='agent' || req.user.role=="owner"){
               req.body.user_id=req.user.id;
         }
         else{
             return next(new ErrorHandller("please login first", 400))
     
         }
     }
    
    if(req.file){

          req.body.image=req.file.filename
    }
    else{
        return next(new ErrorHandller("please select an image", 400))

    }

    
    // find user from db
    const property = await Property.create(
       req.body
    )
    if (property) {

        res.status(201).send('Property created successfully.');
    }
    else {
        res.status(500).send('Internal server error.');

    }
});
const createPropertyReview=catchValidationerrors(async (req,res,next)=>{
    console.log(req.body);
    const {rating,comment,propertyId}=req.body;
    const review={
        user:req.user._id,
        name:req.user.name,
        rating:Number(rating),
        comment
    }
    const property=await Property.findById(propertyId);
    const isReviewed=property.reviews.find(r=>r.user===req.user._id)
    if(isReviewed){
        property.reviews.forEach(review=>{
    if(review.user===req.user._id){
        review.comment=comment;
        review.rating=rating
    }
   })
    }
    else{
        property.reviews.push(review);
        property.numOfReviews=property.reviews.length
    }
    property.ratings=property.reviews.reduce((acc,item)=>item.rating+acc,0)/property.reviews.length
    await property.save({validateBeforeSave:false});
    res.status(200).json({success:true})
})
// all properties
const allProperties = catchValidationerrors(async (req, res, next) => {
    console.log(req.query);
    const resPerPage=8;
    const count=await Property.countDocuments();
    const apiFeatures=new APIFeatures(Property.find().populate('user_id'),req.query).
    search()
    .filter()
    .pagination(resPerPage)
    const properties = await apiFeatures.query;
    // console.log(properties);
    try {
        res.status(200).json(properties);
    } catch (error) {
        // Handle any errors that occur during the database query or response
        res.status(500).json({ error: 'Failed to fetch properties' });
    }
  });
  
// fetured lists
const feturedProperty = catchValidationerrors(async (req, res, next) => {
    const resPerPage=8;
    
    const count=await Property.countDocuments();
    const apiFeatures=new APIFeatures(Property.find(),req.query).
    search()
    .filter()
    .pagination(resPerPage)
    const products = await apiFeatures.query;
    try {
        const properties = await Property.find().sort({ createdAt: -1 }).limit(5);

        res.status(200).json(properties);
    } catch (error) {
        // Handle any errors that occur during the database query or response
        res.status(500).json({ error: 'Failed to fetch properties' });
    }
});
// delete property
const deleteProperty = catchValidationerrors(async (req, res, next) => {
    let property = await Property.findById(req.params.id);
   console.log(property);
    if (!property) {
        return next(new ErrorHandller("product not found",404));
    }
   
     await product.deleteOne();
    res.status(200).json({
        success: true,
        isDeleted:true
    })
});
// get single product
const getSingleproperty = catchValidationerrors (async (req, res, next) => {
    let property = await Property.findById(req.params.id).populate('user_id');
    // console.log(req.params.id);
    if (!property) {
        return next(new ErrorHandller("product not found",404));
        }
        setTimeout(() => {
            res.status(200).json({
                success: true,
                property
            })
        }, 1000);
      
    })
    // get my product
const myProperties = catchValidationerrors (async (req, res, next) => {
    let properties = await Property.find({user_id:req.user.id});
    // console.log(req.params.id);
    if (!properties) {
        return next(new ErrorHandller("property not found",404));
        }
        res.status(200).json(properties);

      
    })
export { 
    addProperty,
    feturedProperty,
    deleteProperty,
    allProperties ,
    getSingleproperty,
    createPropertyReview,
    myProperties};
