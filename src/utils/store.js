import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import optionsSlice from "./optionsSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    optionss: optionsSlice,
  },
});
export default store;
