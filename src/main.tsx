import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import ScrollToTop from "./components/shared/ScrollToTop.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import "./index.css";
import { persistor, store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster />
        <ScrollToTop />
      </PersistGate>
    </Provider>
  </StrictMode>
);
