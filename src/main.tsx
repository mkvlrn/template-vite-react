import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "~/global.css";
import { App } from "~/pages/app";

// biome-ignore lint/style/noNonNullAssertion: root will ALWAYS be present
const rootElement = document.querySelector("#root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
