import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, MapPin, Lock, BadgeCheck, Briefcase } from "lucide-react";
import { Header } from "../LandingPage.jsx";

export default function SeekerRegister() {
  const navigate = useNavigate();
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

    // Save to backend later
    console.log("Seeker Data:", form);

    navigate("/login");
  };

  return (
    <>
    <Header />
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-100 px-6">
      <form
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
            className="w-full pl-10 py-2 border rounded"
            required
          >
            <option value="">Select Experience</option>
            <option value="fresher">Fresher</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>

        <Input icon={BadgeCheck} name="skills" placeholder="Skills (React, Node...)" onChange={handleChange} />
        <Input icon={Lock} name="password" type="password" placeholder="Password" onChange={handleChange} />

        {/* Optional Aadhaar + OTP */}
        <Input icon={BadgeCheck} name="aadhaar" placeholder="Aadhaar Number (optional)" onChange={handleChange} />
        <Input icon={BadgeCheck} name="otp" placeholder="OTP (optional)" onChange={handleChange} />

        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

/* Reusable Input */
function Input({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-3 text-gray-400" />
      <input
        {...props}
        required={!props.placeholder.includes("optional")}
        className="w-full pl-10 py-2 border rounded"
      />
    </div>
    
  );
}
