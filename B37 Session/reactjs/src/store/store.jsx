import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../actions/features/student";

//App Store Setup
const AppStore = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default AppStore;
