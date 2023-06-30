import Home from './pages/Home/index.jsx';
import { Routes, Route } from "react-router-dom"
import "./index.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;