import { createSlice } from "@reduxjs/toolkit";

const optionsSlice = createSlice({
  name: "optionss",
  initialState: {
    isOpenOpt: true,
  },
  reducers: {
    clickOpen: (state) => {
      state.isOpenOpt = !state.isOpenOpt;
    },
    clickClose: (state) => {
      state.isOpenOpt = false;
    },
  },
});
export const { clickOpen, clickClose } = optionsSlice.actions;
export default optionsSlice.reducer;
