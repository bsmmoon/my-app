import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { fetchHistoryEntriesAPI } from './historyAPI';

export interface HistoryEntry {
  id: string,
  description: string,
  tags: string[],
}

export interface HistoryState {
  entries: HistoryEntry[],
}

const initialState: HistoryState = {
  entries: [],
};

export const fetchHistoryEntries = createAsyncThunk(
  'history/fetchHistoryEntries',
  async () => {
    return await fetchHistoryEntriesAPI();
  }
);

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoryEntries.fulfilled, (state, action) => {
        state.entries = action.payload.data;
      })
  },
});

// export const { } = historySlice.actions;

export const getHistoryEntries = (state: RootState) => state.history.entries;

export default historySlice.reducer;
