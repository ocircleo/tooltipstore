import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./userSlice/profile/ProfileSlice";
const store = configureStore({
  reducer: {
    userInfo: userInfo,
  },
});
