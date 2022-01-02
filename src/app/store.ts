import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import historyReducer from '../features/history/historySlice';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import navigationReducer from '../features/navigation/navigationSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    history: historyReducer,
    counter: counterReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
