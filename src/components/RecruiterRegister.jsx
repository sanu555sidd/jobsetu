import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  MapPin,
  Lock,
  Building,
  LogOut,
  CheckCircle,
} from "lucide-react";
import { Header } from "../LandingPage";
import { motion, AnimatePresence } from "framer-motion";

export default function RecruiterRegister() {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    designation: "",
    location: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.location || !form.email || !form.password) {
      alert("Please fill required fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "recruiter",
          fullName: form.name,          // ✅ correct mapping
          email: form.email,
          password: form.password,
          location: form.location,
          companyName: form.company,    // ✅ correct mapping
          designation: form.designation,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <>
      <Header />

      {/* Logout button */}
      <div className="fixed top-24 right-6 z-50">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full hover:bg-red-100 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-100 px-6">
        <AnimatePresence mode="wait">
          {!success ? (
            /* FORM */
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-4"
            >
              <h2 className="text-2xl font-bold text-center mb-4">
                Job Recruiter Registration
              </h2>

              <Input icon={User} name="name" placeholder="Full Name" onChange={handleChange} />
              <Input icon={Building} name="company" placeholder="Company Name (optional)" onChange={handleChange} />
              <Input icon={Building} name="designation" placeholder="Designation (optional)" onChange={handleChange} />
              <Input icon={MapPin} name="location" placeholder="Location" onChange={handleChange} />
              <Input icon={Mail} name="email" type="email" placeholder="Email" onChange={handleChange} />
              <Input icon={Lock} name="password" type="password" placeholder="Password" onChange={handleChange} />

              <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
                Submit
              </button>
            </motion.form>
          ) : (
            /* SUCCESS */
            <motion.div
              key="success"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white p-10 rounded-xl shadow-lg text-center"
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Registration Successful 🎉
              </h2>
              <p className="text-gray-600">
                Redirecting you to login...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

/* ---------- Reusable Input ---------- */
function Input({ icon: Icon, ...props }) {
  const isOptional = props.placeholder?.includes("optional");

  return (
    <div className="relative">
      <Icon className="absolute left-3 top-3 text-gray-400" />
      <input
        {...props}
        required={!isOptional}
        className="w-full pl-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
