import "#global.css";
import { App } from "#pages/app.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.querySelector("#root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
