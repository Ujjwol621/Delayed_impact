import { useEffect, useState } from "react";
import api from "../services/api";

export default function QueueManagement() {
  const [queues, setQueues] = useState([]);
  const [newQueue, setNewQueue] = useState("");

  // Fetch queues
  useEffect(() => {
    api.get("/queues")
      .then(res => setQueues(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add new queue
  const addQueue = () => {
    api.post("/queues", { name: newQueue })
      .then(res => {
        setQueues([...queues, res.data]);
        setNewQueue("");
      })
      .catch(err => console.error(err));
  };

  // Delete queue
  const deleteQueue = (id) => {
    api.delete(`/queues/${id}`)
      .then(() => setQueues(queues.filter(q => q.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Queues</h2>
      
      {/* Add Queue */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newQueue}
          onChange={(e) => setNewQueue(e.target.value)}
          placeholder="New queue name"
          className="border rounded-lg px-3 py-2 w-full"
        />
        <button
          onClick={addQueue}
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* Queue List */}
      <ul className="divide-y divide-gray-200">
        {queues.map(queue => (
          <li key={queue.id} className="flex justify-between items-center py-2">
            <span>{queue.name}</span>
            <button
              onClick={() => deleteQueue(queue.id)}
              className="bg-red-600 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
