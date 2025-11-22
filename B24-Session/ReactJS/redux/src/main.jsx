import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";

// Imports
import AppStore from "./store/AppStore.jsx";
import Register from "./components/register.jsx";
import Display from "./components/Display.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={AppStore}>
      <Display />
      <App />
      <Register />
    </Provider>
  </StrictMode>
);
