import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Customer_Dashboard from "./components/Customer_Dashboard";


function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Customer_Dashboard" element={<Customer_Dashboard />} />
      </Routes> */}

      <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Customer_Dashboard />} />
</Routes>
    </Router>
  );
}

export default App;
