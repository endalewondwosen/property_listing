import mongoose from "mongoose";
const propertySchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: [true, "Please enter name of category"],
        maxLength: [30, "Your name cannot exceed 30 characters"]
    },
    body: {
        type: String,
        required: [true, "Please enter body of category"],
    },
    category: {
        type: String,
        required: [true, 'please Select Category'],
    },
    vedioUrl: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, "Please enter property  price"],
    },
    beds: {
        type: Number,
        required: [true, "Please enter Number of beds"],
    },
    baths: {
        type: Number,
        required: [true, "Please enter number of baths"],
    },
    area: {
        type: Number,
        required: [true, "Please enter area of the property"],
    },
    status: {
        type: String,
        required: [true, "Please enter status of the property"],
    },
    image: {
        type: String,
        required: [true, "product image is required"],

    },
    city: {
        type: String,
        required: [true, "product city is required"],

    },
    address: {
        
        type: String,
        required: [true, "product address is required"],

    },
    type: {
        type: String,
        required: [true, "product type is required"],

    },
    location: {
        type: String,
        required: [true, "product location is required"],

    },
    ratings: {
        type: Number,
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
})
const Property = mongoose.model("Property", propertySchema);
export default Property;