import  express  from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app=express();
// apply cors middleware to all routes
app.use('/uploads', express.static('uploads'));
app.use('/uploads/property', express.static('uploads/property'));

// const __dirname=path.dirname(new URL(import.meta.url).pathname)
// app.use('./uploads',express.static(path.join(__dirname,'uploads')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
import users from './routes/user.js'
import category from './routes/categories.js'
import property from './routes/property.js'
import notification from './routes/notification.js'
import  errorMiddleware from './utils/error.js'
import cors from 'cors'
// const errorMiddleware =require('./utils/error.js')
 // Increase the limit as per your requirement
 var corsOptions = {
  origin: ['http://localhost:3000','http://localhost:63775'], // allow only the client origin
  credentials: true // enable credentials for CORS requests
};
app.use(cookieParser());
app.use(cors(corsOptions));
 dotenv.config({
   path:'config/config.env'
  });
app.get('/health', (req, res) => {
    res.sendStatus(200);
  });
  // app.post('/login', (req, res) => {
  //   res.sendStatus(200);console.log(req.body);
  // });
app.use("/api",users);
app.use('/api',category)
app.use('/api',property)
app.use('/api',notification)
// error handller
app.use(errorMiddleware);
export default app;