import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const saveSlice = createSlice({
  name: "saveSlice",
  initialState,
  reducers: {
    addJop(state, action) {
        state.items = [...state.items, action.payload];
    },
    removeJop(state, action) {
      state.items = state.items.filter((ele) => ele !== action.payload);
    },
    reCreateJops(state, action) {
      state.items = action.payload;
    },
  },
});

export const saveActions = saveSlice.actions;

export default saveSlice.reducer;
