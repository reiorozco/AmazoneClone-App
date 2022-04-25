import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: { basket: basketReducer, currentUser: userReducer },
});
