import { useState, useEffect } from "react";
import {useNavigate, Link } from "react-router-dom";
import WelcomeSection from "./WelcomeSection";
import AppointmentSection from "./AppointmentSection";
// import api from "../services/api";

export default function CustomerDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // fetchAppointments();
  }, []);

//   const fetchAppointments = async () => {
//     try {
//       const response = await api.get("/appointments/me"); 
//       setAppointments(response.data || []);
//     } catch (error) {
//       console.error("Failed to fetch appointments:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
 // Dummy function for frontend-only
  const fetchAppointments = () => {
    // Optionally set dummy data here if needed
    setAppointments([]);
    setLoading(false);
  };



  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Customer Dashboard
        </h1>
                {/* Dummy text for frontend-only */}
        <div className="mb-4 p-4 bg-blue-50 rounded">
          <p>
            <strong>Welcome!</strong> to customer dashboard. 
            {/* Backend integration is currently disabled.<br /> */}
            {/* You can view static content and UI components here. */}
          </p>
        </div>

                {/* Appointment Button */}
        <button
          className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => navigate("/AppointmentSection")}
        >
         Book New Appointment
        </button>
        
        {/* Welcome Section */}
        <WelcomeSection loading={loading} appointments={appointments} />

        {/* Appointment Section */}
        {/* <AppointmentSection onAppointmentBooked={fetchAppointments} /> */}
      </div>
    </div>
  );
}
