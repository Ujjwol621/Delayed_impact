import { useEffect, useState } from "react";
import api from "../services/api";

export default function QueueStatus() {
  const [status, setStatus] = useState([]);

  // Fetch queue status
  useEffect(() => {
    api.get("/queue-status")
      .then(res => setStatus(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Current Queue Status</h2>
      {status.length === 0 ? (
        <p className="text-gray-500">No active queues.</p>
      ) : (
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Queue Name</th>
              <th className="p-2 border">Current Token</th>
              <th className="p-2 border">Waiting</th>
            </tr>
          </thead>
          <tbody>
            {status.map((q) => (
              <tr key={q.id} className="text-center">
                <td className="p-2 border">{q.name}</td>
                <td className="p-2 border">{q.currentToken}</td>
                <td className="p-2 border">{q.waitingCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
