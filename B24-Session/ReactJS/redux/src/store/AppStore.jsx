import { configureStore } from "@reduxjs/toolkit";

// Imports
import { counterReducer } from "../actions/counterSlice";
import { reducer as userReducer } from "../actions/userSlice";

// App Store
const AppStore = configureStore({
  devTools: true,
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
});

export default AppStore;
