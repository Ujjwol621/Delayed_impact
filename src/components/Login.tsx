import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Add your login logic here
    if (!form.phone || !form.password) {
      setError("Please enter both phone number and password.");
      return;
    }
    setError("");
    alert("Login successful! (Demo)");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <form
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Login
        </h2>
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
        <div className="text-center mt-2 text-sm">
    Don't have an account?{" "}
  <Link to="/register" className="text-blue-600 hover:underline">
    Register here
  </Link>
</div>
      </form>
    </div>
  );
}