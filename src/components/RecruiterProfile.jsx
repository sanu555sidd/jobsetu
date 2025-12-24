import { useEffect, useState } from "react";
import { User, Mail, MapPin, Building } from "lucide-react";

export default function RecruiterProfile() {
  const [form, setForm] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setForm(data.user));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    const res = await fetch("http://localhost:5000/api/users/me", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <Input icon={User} name="fullName" value={form.fullName} onChange={handleChange} />
      <Input icon={Mail} name="email" value={form.email} disabled />
      <Input icon={MapPin} name="location" value={form.location} onChange={handleChange} />
      <Input icon={Building} name="companyName" value={form.companyName} onChange={handleChange} />
      <Input icon={Building} name="designation" value={form.designation} onChange={handleChange} />

      <button
        onClick={handleUpdate}
        className="w-full mt-4 bg-green-600 text-white py-2 rounded"
      >
        Update Profile
      </button>
    </div>
  );
}

const Input = ({ icon: Icon, ...props }) => (
  <div className="relative mb-3">
    <Icon className="absolute left-3 top-3 text-gray-400" />
    <input {...props} className="w-full pl-10 py-2 border rounded" />
  </div>
);
