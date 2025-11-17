
  //import { createRoot } from "react-dom/client";
  //import App from "./App.tsx";
  //import "./index.css";

  //createRoot(document.getElementById("root")!).render(<App />);
  

    import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// document.dispatchEvent(new Event("render-complete")); // Eliminado - ya no se necesita para prerender