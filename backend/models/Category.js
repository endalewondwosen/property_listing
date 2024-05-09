 
import mongoose from "mongoose";
 

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name of category"],
        maxLength: [30, "Your name cannot exceed 30 characters"]
      },
      
      body: {
        type: String,
        required: [true, "Please enter body of category"],
      },
    image: {
        
            type: String,
            required: true,
        
       
    },
    

    created_at:{
        type:Date,
        default:Date.now
    },
    


})
 
 
const Category = mongoose.model("Category", categorySchema);
export default  Category;