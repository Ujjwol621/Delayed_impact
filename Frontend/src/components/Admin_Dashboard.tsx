import { useState } from "react";
import QueueManagement from "./QueManagement";
import QueueStatus from "./QueueStatus";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"management" | "status">("management");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Tab Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("management")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "management" ? "bg-blue-600 text-white" : "bg-white border"
          }`}
        >
          Queue Management
        </button>
        <button
          onClick={() => setActiveTab("status")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "status" ? "bg-blue-600 text-white" : "bg-white border"
          }`}
        >
          Queue Status
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-md p-6">
        {activeTab === "management" && <QueueManagement />}
        {activeTab === "status" && <QueueStatus />}
      </div>
    </div>
  );
}
