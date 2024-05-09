import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// get user from ocal storage
import PropertyService from './propertyService'

const initialState = {
    properties: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
 
}

// register category 
export const addProperty = createAsyncThunk(
    'addProperty',
    async (properties, thunkAPI) => {
        try {
            return await PropertyService.addProperty(properties)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
//  featured lists 
export const featuredproperties = createAsyncThunk(
    'featuredproperties',
    async ( thunkAPI) => {
        try {
            return await PropertyService.featuredproperties()
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
// all properties
export const allproperties = createAsyncThunk(
    'allproperties',
    async (thunkAPI) => {
       try {

           return await PropertyService.allproperties()
       } catch (error) {
           const message = (error.response && error.response.data && error.response.data.errMessage)
               || error.message || error.toString();
           return thunkAPI.rejectWithValue(message)
       }
   }

)
 // register user 
 export const singleproperty = createAsyncThunk(
     'singleproperty',
     async (id,thunkAPI) => {
        try {

            return await PropertyService.singleproperty(id)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
export const addReview = createAsyncThunk(
    'addReview',
    async (review,thunkAPI) => {
       try {

           return await PropertyService.addReview(review )
       } catch (error) {
           const message = (error.response && error.response.data && error.response.data.errMessage)
               || error.message || error.toString();
           return thunkAPI.rejectWithValue(message)
       }
   }

)
// my properties
export const myProperties = createAsyncThunk(
    'myProperties',
    async (id,thunkAPI) => {
       try {

           return await PropertyService.myProperties(id)
       } catch (error) {
           const message = (error.response && error.response.data && error.response.data.errMessage)
               || error.message || error.toString();
           return thunkAPI.rejectWithValue(message)
       }
   }

)
export const propertySlice = createSlice({
    name: 'propertyReducer', initialState,
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
        builder.addCase(addProperty.pending, (state) => {
            state.isLoading = true
        }).
            addCase(addProperty.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.properties = action.payload,
                    state.message=action.payload
            }).
            addCase(addProperty.rejected, (state, action) => {
                state.isError = true,
                    state.isLoading = false,
                    state.message = action.payload,
                    state.properties = null
                    // featured properties
            }).addCase(featuredproperties.pending,(state)=>{
                  state.isLoading=true
            })
            .addCase(featuredproperties.fulfilled,(state,action)=>{
                state.isLoading = false,
                state.isSuccess = true,
                state.properties = action.payload,
                state.message=action.payload
          })
          .addCase(featuredproperties.rejected,(state,action)=>{
            state.isError = true,
            state.isLoading = false,
            state.message = action.payload,
            state.properties = null

      })
 
    //   all properties
    .addCase(allproperties.pending,(state)=>{
        state.isLoading=true
  })
  .addCase(allproperties.fulfilled,(state,action)=>{
      state.isLoading = false,
      state.isSuccess = true,
      state.properties = action.payload,
      state.message=action.payload
       
})
.addCase(allproperties.rejected,(state,action)=>{
  state.isError = true,
  state.isLoading = false,
  state.message = action.payload,
  state.properties = null
})
   
 //   my properties
 .addCase(myProperties.pending,(state)=>{
    state.isLoading=true
})
.addCase(myProperties.fulfilled,(state,action)=>{
  state.isLoading = false,
  state.isSuccess = true,
  state.properties = action.payload,
  state.message=action.payload
   
})
.addCase(myProperties.rejected,(state,action)=>{
state.isError = true,
state.isLoading = false,
state.message = action.payload,
state.properties = null
})
.addCase(addReview.pending,(state)=>{
    state.isLoading=true
})
.addCase(addReview.fulfilled,(state,action)=>{
  state.isLoading = false,
  state.isSuccess = true,
  state.properties = action.payload,
  state.message=action.payload
   
})
.addCase(addReview.rejected,(state,action)=>{
state.isError = true,
state.isLoading = false,
state.message = action.payload,
state.properties = null
})

             
            
    }

})
export const { reset } = propertySlice.actions
export default propertySlice.reducer;