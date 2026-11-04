import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import { initAnalytics } from "@/lib/analytics";

initAnalytics();

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pages written out at build time (scripts/prerender.js) already contain
// their HTML, so React attaches to it instead of rendering from scratch.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}
