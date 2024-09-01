import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ------------------------------------------------------------------
// Pages
const Home = lazy(() => import("./Pages/Home"));
const Cart = lazy(() => import("./Pages/Cart"));
const Invoice = lazy(() => import("./Pages/Invoice"));
const Orders = lazy(() => import("./Pages/Orders"));
const NoPageFound = lazy(() => import("./Pages/NoPageFound"));
// ------------------------------------------------------------------
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Tracking from "./Pages/Tracking";
// ------------------------------------------------------------------
function App() {
  // Observe Browser Theme
  useEffect(() => {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if (mediaQuery.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      mediaQuery.addEventListener("change", (e) => {
        if (e.matches) {
          document.documentElement.classList.remove("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      });

      return () => mediaQuery.removeEventListener("change", () => {});
    }
  }, []);
  return (
    <Suspense callback={<LoadingSpinner />}>
      <main className="app dark:*:bg-slate-800 select-none rtl:text-right rtl:flex-row-reverse">
        <ToastContainer
          position="top-center"
          limit={3}
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Router>
          <Routes>
            <Route path="/:restaurant/:table" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </Router>
      </main>
    </Suspense>
  );
}

export default App;
