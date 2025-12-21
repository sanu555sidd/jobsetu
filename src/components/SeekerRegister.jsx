import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  MapPin,
  Lock,
  BadgeCheck,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import { Header } from "../LandingPage";

export default function SeekerRegister() {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    experience: "",
    skills: "",
    password: "",
    aadhaar: "",
    otp: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (
      !form.name ||
      !form.email ||
      !form.location ||
      !form.experience ||
      !form.skills ||
      !form.password
    ) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Seeker Data:", form);

    setSuccess(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      <Header />

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
                Job Seeker Registration
              </h2>

              <Input icon={User} name="name" placeholder="Full Name" onChange={handleChange} />
              <Input icon={Mail} name="email" type="email" placeholder="Email" onChange={handleChange} />
              <Input icon={MapPin} name="location" placeholder="Location" onChange={handleChange} />

              {/* Experience Dropdown */}
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 text-gray-400" />
                <select
                  name="experience"
                  onChange={handleChange}
                  required
                  className="w-full pl-10 py-2 border rounded"
                >
                  <option value="">Select Experience</option>
                  <option value="fresher">Fresher</option>
                  <option value="experienced">Experienced</option>
                </select>
              </div>

              <Input icon={BadgeCheck} name="skills" placeholder="Skills (React, Node...)" onChange={handleChange} />
              <Input icon={Lock} name="password" type="password" placeholder="Password" onChange={handleChange} />
              <Input icon={BadgeCheck} name="aadhaar" placeholder="Aadhaar Number (optional)" onChange={handleChange} />
              <Input icon={BadgeCheck} name="otp" placeholder="OTP (optional)" onChange={handleChange} />

              <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
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

/* Reusable Input Component */
function Input({ icon: Icon, ...props }) {
  const isOptional = props.placeholder?.includes("optional");

  return (
    <div className="relative">
      <Icon className="absolute left-3 top-3 text-gray-400" />
      <input
        {...props}
        required={!isOptional}
        className="w-full pl-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
