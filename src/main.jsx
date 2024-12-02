import "@radix-ui/themes/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WhatsappSticky from "./components/whatsapp-sticky";
import "./index.css";
import { routeConfig } from "./routefile";

const router = createBrowserRouter(routeConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <WhatsappSticky />
  </StrictMode>
);
