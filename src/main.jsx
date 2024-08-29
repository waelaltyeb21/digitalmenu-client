import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import OrdersApi from "./Context/OrdersApi.jsx";
import LangApi from "./Context/LangApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LangApi>
      <OrdersApi>
        <App />
      </OrdersApi>
    </LangApi>
  </StrictMode>
);
