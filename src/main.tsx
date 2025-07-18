import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.scss";
import App from "./App.tsx";
import { JokeProvider } from "./context/JokeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JokeProvider>
      <App />
    </JokeProvider>
  </StrictMode>
);
