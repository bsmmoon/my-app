import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { authWithGoogle, getCurrentUser } from './userAPI';

export interface UserState {
  uid: string | null,
  displayName: string | null,
  photoURL: string | null,
}

const initialState: UserState = {
  uid: null,
  displayName: null,
  photoURL: null,
};

export const authenticate = createAsyncThunk(
  'user/authenticate',
  async () => {
    return await authWithGoogle();
  }
);

export const checkSignIn = createAsyncThunk(
  'user/checkSignIn',
  async () => {
    return await getCurrentUser();
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.fulfilled, (state, action) => {
        state.uid = action.payload.uid;
        state.displayName = action.payload.displayName;
        state.photoURL = action.payload.photoURL;
      })
      .addCase(checkSignIn.fulfilled, (state, action) => {
        state.uid = action.payload.uid;
        state.displayName = action.payload.displayName;
        state.photoURL = action.payload.photoURL;
      });
  },
});

// export const { } = userSlice.actions;

export const getDisplayName = (state: RootState) => state.user.displayName;
export const getPhotoURL = (state: RootState) => state.user.photoURL;

export default userSlice.reducer;
