import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// get user from ocal storage
import AuthService from './authService'
const user = JSON.parse(localStorage.getItem('user'))
const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// register user 
export const login = createAsyncThunk(
    'login',
    async (user, thunkAPI) => {
        try {
            return await AuthService.login(user)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
// register user 
export const register = createAsyncThunk(
    'register',
    async (user, thunkAPI) => {
        try {
            return await AuthService.register(user)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
// loged in user 
export const logedInUser = createAsyncThunk(
    'logedInUser',
    async (thunkAPI) => {
        try {
            return  AuthService.logedInUser()
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
export const updateProfile = createAsyncThunk(
    'updateProfile',
    async (userData,thunkAPI) => {
        try {
            return  AuthService.updateProfile(userData)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.errMessage)
                || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }

)
// register user 
export const logout = createAsyncThunk(
    'logout',
    async (thunkAPI) => {
        try {
            return await AuthService.logout()
        } catch (error) {
            const message = 'loged out successfully!!'
            return thunkAPI.rejectWithValue(message)
        }
    }

)
export const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = false,
                state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        }).
            addCase(login.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.user = action.payload
            }).
            addCase(login.rejected, (state, action) => {
                state.isError = true,
                    state.isLoading = false,
                    state.message = action.payload,
                    state.user = null
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true,
                    state.isLoading = false,
                    state.message = action.payload,
                    state.user = null
            })
            .addCase(logedInUser.pending, (state, action) => {
                state.isLoading = true

            })
            .addCase(logedInUser.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.user = action.payload
            })
            .addCase(logedInUser.rejected, (state, action) => {
                state.isError = true,
                state.isLoading = false,
                state.message = action.payload,
                state.user = null
            })
            // log out
            .addCase(logout.pending, (state, action) => {
                state.isLoading = true

            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = false,
                    state.user = action.payload,
                state.message = action.payload

            })
            .addCase(logout.rejected, (state, action) => {
                state.isError = true,
                state.isLoading = false,
                state.message = action.payload,
                state.user = null
            })
            .addCase(updateProfile.pending, (state, action) => {
                state.isLoading = true

            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.user = action.payload,
                state.message = action.payload

            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isError = true,
                state.isLoading = false,
                state.message = action.payload,
                state.user = null
            })
    }

})
export const { reset } = authSlice.actions
export default authSlice.reducer;