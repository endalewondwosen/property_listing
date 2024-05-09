import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import notificationService from './notificationService'
const initialState = {
    notifications: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    isSent:false,
    message: '',
    count:0
 
}

// register category 
export const addNotification = createAsyncThunk(
    'addNotification',
    async (notifications, thunkAPI) => {
        try {
            return await notificationService.addNotification(notifications)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
 
// all properties
export const allNotifications = createAsyncThunk(
    'allNotifications',
    async (thunkAPI) => {
       try {

           return await notificationService.allNotifications()
       } catch (error) {
           const message = (error.response && error.response.data && error.response.data.errMessage)
               || error.message || error.toString();
           return thunkAPI.rejectWithValue(message)
       }
   }

)
 
 
export const notificationSlice = createSlice({
    name: 'notificationReducer', initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = false,
                state.message = '',
                state.count=0
        }
    },
    extraReducers: (builder) => {
        // add property
        builder.addCase(addNotification.pending, (state) => {
            state.isLoading = true
        }).
            addCase(addNotification.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                   state.isSent=true
                    state.notifications = action.payload,
                    state.message=action.payload
            }).
            addCase(addNotification.rejected, (state, action) => {
                state.isError = true,
                    state.isLoading = false,
                    state.message = action.payload,
                    state.notifications = null
                  
            })
            builder.addCase(allNotifications.pending, (state) => {
                state.isLoading = true
            }).
                addCase(allNotifications.fulfilled, (state, action) => {
                    state.isLoading = false,
                        state.isSuccess = true,
                       state.isSent=true
                        state.notifications = action.payload,
                        state.message=action.payload,
                        state.count=action.payload.count
                }).
                addCase(allNotifications.rejected, (state, action) => {
                    state.isError = true,
                        state.isLoading = false,
                        state.message = action.payload,
                        state.notifications = null
                      
                })

             
            
    }

})
export const { reset } = notificationSlice.actions
export default notificationSlice.reducer;