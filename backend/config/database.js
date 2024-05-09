import mongoose from "mongoose";
const connectToDb=()=>{
    mongoose.connect(process.env.DB_LOCAL_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then(con=>{
            console.log(`db connected successfully with connection string:${con.connection.host}`);
        });
}
 export default connectToDb;