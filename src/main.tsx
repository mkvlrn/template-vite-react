import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "~/global.css";
import { App } from "~/pages/app";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.querySelector("#root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
