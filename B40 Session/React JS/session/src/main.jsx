import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

import Users from "./components/users";
import AppStore from "./store/AppStore";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={AppStore}>
      <Users />
    </Provider>
  </StrictMode>
);
