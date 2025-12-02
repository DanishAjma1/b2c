import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CursorDot from "./componants/CursorDot";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <CursorDot/>
      <App />
    </BrowserRouter>
  </StrictMode>
);
