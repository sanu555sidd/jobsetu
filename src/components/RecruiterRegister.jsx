import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, MapPin, Lock, Building } from "lucide-react";
import { Header } from "../LandingPage";

export default function RecruiterRegister() {
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.location || !form.email || !form.password) {
      alert("Please fill required fields");
      return;
    }

    console.log("Recruiter Data:", form);
    navigate("/login");
  };

  return (
    <>
    <Header />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Recruiter Registration
        </h2>

        <Input icon={User} name="name" placeholder="Full Name" onChange={handleChange} />
        <Input icon={Building} name="company" placeholder="Company Name (optional)" onChange={handleChange} />
        <Input icon={Building} name="designation" placeholder="Designation (optional)" onChange={handleChange} />
        <Input icon={MapPin} name="location" placeholder="Location" onChange={handleChange} />
        <Input icon={Mail} name="email" type="email" placeholder="Email" onChange={handleChange} />
        <Input icon={Lock} name="password" type="password" placeholder="Password" onChange={handleChange} />

        <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

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
