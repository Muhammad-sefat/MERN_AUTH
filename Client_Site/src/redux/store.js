import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/UserSlice";

export const store = configureStore({
  reducer: { user: UserReducer },
  middleware: (getDefaultMiddlewere) =>
    getDefaultMiddlewere({
      serializableCheck: false,
    }),
});
