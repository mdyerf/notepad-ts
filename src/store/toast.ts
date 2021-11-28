import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { RootState } from "./store";

const slice = createSlice({
  name: "toast",
  initialState: { text: "", type: "error", open: false } as ToastStatus,
  reducers: {
    error: (state, action) => {
      state.open = true;
      state.text = action.payload.message;
      state.type = "error";
    },
    success: (state, action) => {
      state.open = true;
      state.text = action.payload.message;
      state.type = "success";
    },
    close: (state) => {
      state.open = false;
    },
  },
});

const getStatus = createSelector(
  (state: RootState) => state.toast,
  (state) => state
);

export default slice.reducer;
export const { error, success, close } = slice.actions;
export { getStatus };
export interface ToastStatus {
  open: boolean;
  type: "error" | "success";
  text: string;
}
