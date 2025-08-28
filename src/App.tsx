import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin_dashboard from "./components/Admin_dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Admin_dashboard" element={<Admin_dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
