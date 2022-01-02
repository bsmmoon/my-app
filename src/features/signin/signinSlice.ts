import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signin } from './signinAPI';

export interface SigninState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: SigninState = {
  value: 0,
  status: 'idle',
};

export const signinAsync = createAsyncThunk(
    'signin/signin',
    async () => {
      await signin();
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
      });
  },
});

// export const { } = signinSlice.actions;

export default signinSlice.reducer;
