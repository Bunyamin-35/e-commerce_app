import { Routes, Route } from "react-router-dom"

import Home from './pages/Home/index.jsx';
import Detail from './pages/Detail/index.jsx';
import Cart from './pages/Cart/index.jsx';
import Orders from './pages/Orders/index.jsx';
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

import "./index.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
