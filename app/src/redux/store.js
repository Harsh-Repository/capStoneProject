import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./wtpplSlice";
// import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    // users: userReducer,
  },
});
