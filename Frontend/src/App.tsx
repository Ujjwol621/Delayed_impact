import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Admin_Dashboard";
import CustomerDashboard from "./components/Customer_Dashboard";
import AppointmentSection from "./components/AppointmentSection";
import Homepage from "./components/Homepage.tsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin_dashboard" element={<Dashboard />} />
        <Route path="" element={<Homepage />} />
        <Route path="/customer_dashboard" element={<CustomerDashboard />} />
        <Route path="/AppointmentSection" element={<AppointmentSection onAppointmentBooked={() => {}} />} />
      </Routes>
    </Router>
  );
}

export default App;
