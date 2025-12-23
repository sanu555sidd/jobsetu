import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { Header } from "../LandingPage.jsx";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      // ❌ Wrong credentials
      if (!response.ok) {
        setError(data.message || "Invalid credentials. Try again.");
        setLoading(false);
        return;
      }

      // ✅ Login success
      setSuccess("Login successful 🎉");

      // store token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // redirect after success
      setTimeout(() => {
        navigate(
          data.user.role === "recruiter"
            ? "/recruiter/dashboard"
            : "/seeker/dashboard"
        );
      }, 800);

    } catch (err) {
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Welcome Back 👋
          </h2>

          <p className="text-center text-gray-600 mb-6">
            Login to continue with JobSetu
          </p>

          {/* Feedback */}
          {error && (
            <p className="text-red-600 text-center mb-4">{error}</p>
          )}
          {success && (
            <p className="text-green-600 text-center mb-4">{success}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

        </div>
      </div>
    </>
  );
}
