import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { user } from './userAPI';

export interface UserState {
  accessToken: string | null,
  displayName: string | null,
}

const initialState: UserState = {
  accessToken: null,
  displayName: null,
};

export const userAsync = createAsyncThunk(
    'user',
    async () => {
      const response = await user();
      return response
    }
  );
  
export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(userAsync.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.displayName = action.payload.displayName;
      });
  },
});

// export const { } = userSlice.actions;

export default userSlice.reducer;
