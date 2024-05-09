import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// get user from ocal storage
import PropertyDetailService from './properyDetalservice'
const initialState = {
    propertyDetail: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
 
}

 
 
 // register user 
 export const singleproperty = createAsyncThunk(
     'singleproperty',
     async (id,thunkAPI) => {
        try {

            return await PropertyDetailService.singleproperty(id)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
export const PropertyDetailslice = createSlice({
    name: 'propertyDetailReducer', initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = false,
                state.message = ''
        }
    },
    extraReducers: (builder) => {
        // add property
        builder.addCase(singleproperty.pending, (state) => {
            state.isLoading = true
        })
  .addCase(singleproperty.fulfilled,(state,action)=>{
      state.isLoading = false,
      state.isSuccess = true,
      state.propertyDetail = action.payload,
      state.message=action.payload
       
})
.addCase(singleproperty.rejected,(state,action)=>{
  state.isError = true,
  state.isLoading = false,
  state.message = action.payload,
  state.propertyDetail = null
})

             
            
    }

})
export const { reset } = PropertyDetailslice.actions
export default PropertyDetailslice.reducer;