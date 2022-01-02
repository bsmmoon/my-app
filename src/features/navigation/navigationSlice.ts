import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface NavigationState {
  current: string;
}

const initialState: NavigationState = {
  current: "history",
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentNavigation: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentNavigation } = navigationSlice.actions;

export const getCurrentNavigation = (state: RootState) => state.navigation.current;

export default navigationSlice.reducer;
