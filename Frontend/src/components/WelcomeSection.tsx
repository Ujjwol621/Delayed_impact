export default function WelcomeSection({ loading, appointments }) {
  if (loading) {
    return <div className="text-gray-500">Loading your appointments...</div>;
  }

  const hasAppointment = appointments.length > 0;
//   const latest = hasAppointment ? appointments[0] : null;
const latest = hasAppointment
  ? appointments[0]
  : { service: "Consultation", date: "2025-09-01", time: "10:00", status: "Confirmed" };

  return (
    <div className="p-4 bg-blue-50 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">Welcome!</h2>
      {!hasAppointment ? (
        <p className="text-gray-700">
          You have no upcoming appointments. Book one below to get started!
        </p>
      ) : (
        <div>
          <p className="text-gray-700">
            Your next appointment:
          </p>
          <div className="mt-2 p-3 bg-white border rounded-lg shadow-sm">
            <p className="font-medium">{latest.service}</p>
            <p className="text-sm text-gray-600">
              {latest.date} at {latest.time}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Status: <span className="font-semibold">{latest.status}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
