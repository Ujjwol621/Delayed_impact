import React from "react";

export default function Admin_dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg space-y-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Admin Dashboard
        </h2>
        <p className="text-center text-gray-600">
          Welcome, Admin! Here you can manage users and view reports.
        </p>
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
}