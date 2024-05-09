import Category from "../models/Category.js";
import catchValidationerrors from '../utils/validationErrors.js'
import ErrorHandller from "../utils/errorHandller.js";
const addCategory = catchValidationerrors(async (req, res, next) => {
    
    const name = req.body.name;
    const body = req.body.body;
    
    const image=req.file.filename
    if (!name) {
        return next(new ErrorHandller("Please fill the name field", 400))
    }
    if (!body) {
        return next(new ErrorHandller("Please fill the body field", 400))
    }
    if (!image) {
        return next(new ErrorHandller("Please select an image", 400))
    }
    // find user from db
    const category = await Category.create({
        name,
        body,
        image,
    })
    if (category) {

        res.status(201).send('Category created successfully.');
    }
    else {
        res.status(500).send('Internal server error.');

    }
});
const allCategories = catchValidationerrors(async (req, res, next) => {
    try {
        const categories = await Category.find();

        res.status(200).json(categories);
    } catch (error) {
        // Handle any errors that occur during the database query or response
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
});
export { addCategory, allCategories };
