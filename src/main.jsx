import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Footer } from "./components/footer.jsx";
import { Subfooter } from "./components/subfooter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <App />
      <Footer />
      <Subfooter />
    </div>
  </StrictMode>
);
