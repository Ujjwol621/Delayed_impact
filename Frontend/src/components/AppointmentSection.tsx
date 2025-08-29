import { useState } from "react";
// import api from "../services/api";

const DUMMY_TIMES = {
  Consultation: ["10:00", "11:00", "12:00"],
  Maintenance: ["13:00", "14:00", "15:00"],
  Repair: ["16:00", "17:00", "18:00"],
};


export default function AppointmentSection({ onAppointmentBooked }) {
  const [form, setForm] = useState({
    service: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess("");
//     try {
//       await api.post("/appointments", form);
//       setSuccess("Appointment booked successfully!");
//       setForm({ service: "", date: "", time: "" });
//       onAppointmentBooked();
//     } catch (error) {
//       console.error("Booking failed:", error);
//       setSuccess("Failed to book appointment. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

  // Dummy frontend-only submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSuccess("Appointment booked successfully! (Frontend only)");
      setForm({ service: "", date: "", time: "" });
      setLoading(false);
      if (onAppointmentBooked) onAppointmentBooked();
    }, 800);
  };

  // Get available times for selected service
  const availableTimes = form.service ? DUMMY_TIMES[form.service] : [];

  return (
    <div className="p-4 bg-green-50 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-green-800 mb-3">
        Book an Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          required
        >
          <option value="">Select Service</option>
          <option value="Consultation">Service 1</option>
          <option value="Maintenance">Service 2</option>
          <option value="Repair">Service 3</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          required
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
      {success && (
        <p className="mt-3 text-sm text-green-700 font-medium">{success}</p>
      )}

            {/* Dummy info for frontend-only */}
      {/* <div className="mt-4 text-xs text-gray-500">
        <em>Backend integration is disabled. This is a frontend-only demo.</em>
      </div> */}
    </div>
  );
}
