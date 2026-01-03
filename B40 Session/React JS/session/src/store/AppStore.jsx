import { configureStore } from "@reduxjs/toolkit";

// Import slices
import UserReducer from "../features/slices/userslice";

// Store Config
const AppStore = configureStore({
  reducer: {
    Users: UserReducer
  },
});

export default AppStore;
