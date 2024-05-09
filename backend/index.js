 
import app from './app.js'
import dotenv from 'dotenv'
import connectToDb from './config/database.js';
// setting up confi file
dotenv.config({
    path:'backend/config/config.env'
});
// connecting to db
connectToDb();
 
 const ip="192.168.137.102"
const server=app.listen(process.env.PORT, // ip,
 ()=>{
    console.log('server is running on port '+process.env.PORT);
})
process.on("unhandledRejection",err=>{
    console.log(`ERROR${err.stack}`);
    console.log("Due to unhandled promise rejection the server is shuting down");
    server.close(()=>{
        process.exit(1);
    })
})