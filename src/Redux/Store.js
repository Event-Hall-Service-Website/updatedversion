import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slice/ContactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
