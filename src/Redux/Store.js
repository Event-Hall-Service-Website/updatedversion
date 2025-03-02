import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slice/ContactSlice";
import subscribeUser from "./slice/subscribersSlice";
export const store = configureStore({
  reducer: {
    contact: contactReducer,
    subscribers: subscribeUser,
  },
});
