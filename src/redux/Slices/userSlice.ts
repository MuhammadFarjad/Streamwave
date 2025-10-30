import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import userServices from '../../services/userServices';

interface UserState {
    profile: any | null;
    loading: boolean;
    error: string | null;
    isProfileUpdated: boolean;
    isProfileFetched: boolean;
}

interface ApiError {
    message: string;
    errors?: Record<string, string[]>;
}

const initialState: UserState = {
    profile: null,
    loading: false,
    error: null,
    isProfileUpdated: false,
    isProfileFetched: false,
};


export const editProfile = createAsyncThunk(
    'users/editProfile',
    async (profileData: any, { rejectWithValue }) => {
        try {
            const response = await userServices.EditProfile(profileData);
            return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue({
                    message: error.response.data.message?.[0] || 'Profile update failed',
                    errors: error.response.data.errors || {}
                });
            }
            return rejectWithValue({
                message: error.message || 'Profile update failed',
                errors: {}
            });
        }
    }
);
export const getProfile = createAsyncThunk(
    'users/getProfile',
    async (profile: any, { rejectWithValue }) => {
        try {
            const response = await userServices.GetProfile(profile);
            return response.data;
        } catch (error: any) {
            if (axios.isAxiosError(error) && error.response) {
                return rejectWithValue({
                    message: error.response.data.message?.[0] || 'Profile fetch failed',
                    errors: error.response.data.errors || {}
                });
            }
            return rejectWithValue({
                message: error.message || 'Profile fetch failed',
                errors: {}
            });
        }
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUserError(state) {
            state.error = null;
            state.isProfileUpdated = false;
        },
        setUserProfile(state, action: PayloadAction<any>) {
            state.profile = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(editProfile.pending, (state) => {
                console.log('pending');
                state.loading = true;
                state.error = null;
                state.isProfileUpdated = false;
            })
            .addCase(editProfile.fulfilled, (state, action: PayloadAction<any>) => {
                console.log('Fulfilled', action.payload);
                state.loading = false;
                state.isProfileUpdated = true;
                state.isProfileFetched = false;
                state.error = null;
            })
            .addCase(editProfile.rejected, (state, action) => {
                console.log("❌ API Error:", action.payload);
                state.loading = false;
                const payload = action.payload as ApiError;
                state.error = payload?.message || 'Profile update failed';
                state.isProfileUpdated = false;
            })
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isProfileFetched = false;
            })
            .addCase(getProfile.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.profile = action.payload.data;
                state.isProfileFetched = true;
                state.error = null;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false;
                const payload = action.payload as ApiError;
                state.error = payload?.message || 'Profile fetch failed';
                state.isProfileFetched = false;
            });
    }
});

export const { clearUserError, setUserProfile } = userSlice.actions;
export default userSlice.reducer;
