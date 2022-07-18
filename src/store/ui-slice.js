import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showNotification: null },
  reducers: {
    handleNotification(state, action) {
      state.showNotification = {
        type: action.payload.type,
        message: action.payload.message,
        show: action.payload.show,
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
