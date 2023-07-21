import { configureStore } from "@reduxjs/toolkit";
import saveSlice from "./SaveJop/saveSlice";
import filterSlice from "./Filter/filterSlice";

const store = configureStore({
  reducer: { saveJop: saveSlice, filter: filterSlice },
});

export default store;
