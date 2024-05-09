import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/authSlice";
import categoryReducer from '../features/category/CategorySlice'
import propertyReducer from '../features/property/propertySlice'
import  PropertyDetailreducer  from "../features/property/propertyDetailslice";
import nottificationReducer from '../features/notification/notificationSlice'
export const store=configureStore({
    reducer:{
        auth:AuthReducer,
        categories:categoryReducer,
        properties:propertyReducer,
        propertyDetal:PropertyDetailreducer,
        notifications:nottificationReducer,
        
    }
})