import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./Pages/Home";
import NoPageFound from "./Pages/NoPageFound";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Pages/Cart";
import Invoice from "./Pages/Invoice";
import Orders from "./Pages/Orders";
// import TrackOrder from "./Pages/TrackOrder";
function App() {
  return (
    <main className="app select-none rtl:text-right rtl:flex-row-reverse">
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
          {/* <Route path="/track_orders" element={<TrackOrder />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
