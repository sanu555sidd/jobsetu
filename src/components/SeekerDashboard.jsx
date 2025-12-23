import { useState } from "react";
import { Briefcase, FileText, Bell, User } from "lucide-react";
import { Header } from "../LandingPage";

export default function SeekerDashboard() {
  const [activeTab, setActiveTab] = useState("jobs");

  return (
    <>
      <Header />

      <div className="pt-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Seeker Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b mb-6">
          <Tab icon={Briefcase} label="Job Feed" onClick={() => setActiveTab("jobs")} />
          <Tab icon={FileText} label="My Applications" onClick={() => setActiveTab("applications")} />
          <Tab icon={Bell} label="Notifications" onClick={() => setActiveTab("notifications")} />
          <Tab icon={User} label="My Profile" onClick={() => setActiveTab("profile")} />
        </div>

        {/* Content */}
        {activeTab === "jobs" && <JobFeed />}
        {activeTab === "applications" && <MyApplications />}
        {activeTab === "notifications" && <Notifications />}
        {activeTab === "profile" && <MyProfile />}
      </div>
    </>
  );
}

/* ---------- Components ---------- */

const Tab = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 pb-3 hover:text-blue-600"
  >
    <Icon size={18} />
    {label}
  </button>
);

const JobFeed = () => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
    <p>Jobs fetched from backend</p>
  </div>
);

const MyApplications = () => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">My Applications</h2>
    <p>Status: Pending / Accepted / Rejected</p>
  </div>
);

const Notifications = () => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">Notifications</h2>
    <p>Selection / Rejection messages</p>
  </div>
);

const MyProfile = () => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">My Profile</h2>
    <p>Edit seeker profile</p>
  </div>
);
