import "modern-normalize";

import { persistor, store } from "./redux/store.js";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import Icons from "./components/Icons/Icons.jsx";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <Icons />
        </PersistGate>
      </Provider>
    </BrowserRouter>
    <Toaster position="top-center" toastOptions={{ duration: 1000 }} />
  </StrictMode>
);
