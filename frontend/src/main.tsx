import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ColorProvider } from "./Provider/ColorProvider";
import { ProSidebarProvider } from "react-pro-sidebar";
import { UtilProvider } from "./Provider/UtilProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProSidebarProvider>
        <UtilProvider>
          <ColorProvider>
            <App />
          </ColorProvider>
        </UtilProvider>
      </ProSidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
