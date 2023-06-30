import { Routes, Route } from "react-router-dom"

import Home from './pages/Home/index.jsx';
import Detail from './pages/Detail/index.jsx';
import Cart from './pages/Cart/index.jsx';

import "./index.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
