import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Car from "./pages/Car";

function App() {
  return (
    <div className="app">
      <ToastContainer position="bottom-center" limit={1} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/car" element={<Car />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
