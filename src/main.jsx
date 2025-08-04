import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollBar from "./components/ScrollBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <ParallaxProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ParallaxProvider>
  </StrictMode>
);
