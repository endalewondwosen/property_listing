import mongoose from "mongoose";
const notificationSchema = new mongoose.Schema({
    property_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'Property',
        required: true
    },
    user_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: [true, "Please enter name your name"],
        maxLength: [30, "Your name cannot exceed 30 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter your Email"],
    },
    phone: {
        type: String,
        required: [true, "Please enter your your phone number"],
    },
    message: {
        type: String,
        required: [true, "Please enter your a message"],
    },
    created_at: {
        type: Date,
        default: Date.now
    },
})
const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;