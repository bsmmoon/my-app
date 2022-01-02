import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signin } from './signinAPI';
import { User } from '../../app/types'

export interface SigninState {
  user: User | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: SigninState = {
  user: null,
  status: 'idle',
};

export const signinAsync = createAsyncThunk(
    'signin/signin',
    async () => {
      const response = await signin();
      return response
    }
  );
  
export const signinSlice = createSlice({
  name: 'signin',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(signinAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signinAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      });
  },
});

// export const { } = signinSlice.actions;

export default signinSlice.reducer;
