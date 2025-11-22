import { configureStore } from "@reduxjs/toolkit";

// Imports
import { reducer as userReducer } from "../actions/userSlice";

// App Store
const AppStore = configureStore({
  devTools: true,
  reducer: {
    userReducer,
  },
});

export default AppStore;
