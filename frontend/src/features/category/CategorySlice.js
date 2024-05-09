import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// get user from ocal storage
import CategoryService from './categoryService'

const initialState = {
    categories: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// register category 
export const addCategory = createAsyncThunk(
    'addCategory',
    async (categories, thunkAPI) => {
        try {
            return await CategoryService.addCategory(categories)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
 // register user 
export const allCategories = createAsyncThunk(
    'allCategories',
    async ( thunkAPI) => {
        try {
            return await CategoryService.allCategories()
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
export const categorySlice = createSlice({
    name: 'categoryReducer', initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = false,
                state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addCategory.pending, (state) => {
            state.isLoading = true
        }).
            addCase(addCategory.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.categories = action.payload,
                    state.message=action.payload
            }).
            addCase(addCategory.rejected, (state, action) => {
                state.isError = true,
                    state.isLoading = false,
                    state.message = action.payload,
                    state.categories = null
            }).addCase(allCategories.pending,(state)=>{
                  state.isLoading=true
            })
            .addCase(allCategories.fulfilled,(state,action)=>{
                state.isLoading = false,
                state.isSuccess = true,
                state.categories = action.payload,
                state.message=action.payload
          })
          .addCase(allCategories.rejected,(state,action)=>{
            state.isError = true,
            state.isLoading = false,
            state.message = action.payload,
            state.categories = null
      })
 
             
            
    }

})
export const { reset } = categorySlice.actions
export default categorySlice.reducer;