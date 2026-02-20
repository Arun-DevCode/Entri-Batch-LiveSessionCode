import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";

// App Store Config / Setup
const AppStore = configureStore({
  reducer: {
    Counter: CounterSlice,
  },
});

export default AppStore;
