import { useState } from "react";
import {
  Briefcase,
  FileText,
  Bell,
  Bookmark,
  User,
  LogOut,
} from "lucide-react";
import { Header } from "../LandingPage";
import SeekerProfile from "./Seekerprofile";

export default function SeekerDashboard() {
  const [activeTab, setActiveTab] = useState("jobs");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <Header />

      <div className="pt-20 flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md px-4 py-6 hidden md:block">
          <h2 className="text-xl font-bold mb-8 text-blue-600">Seeker Panel</h2>

          <SidebarItem
            icon={Briefcase}
            label="Job Feed"
            active={activeTab === "jobs"}
            onClick={() => setActiveTab("jobs")}
          />

          <SidebarItem
            icon={FileText}
            label="My Applications"
            active={activeTab === "applications"}
            onClick={() => setActiveTab("applications")}
          />

          <SidebarItem
            icon={Bell}
            label="Notifications"
            active={activeTab === "notifications"}
            onClick={() => setActiveTab("notifications")}
          />

          <SidebarItem
            icon={Bookmark}
            label="Saved Jobs"
            active={activeTab === "saved"}
            onClick={() => setActiveTab("saved")}
          />

          <SidebarItem
            icon={User}
            label="My Profile"
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          />

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-600 mt-10 hover:bg-red-50 px-3 py-2 rounded transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "jobs" && <JobFeed />}
          {activeTab === "applications" && <MyApplications />}
          {activeTab === "notifications" && <Notifications />}
          {activeTab === "saved" && <SavedJobs />}
          {activeTab === "profile" && <SeekerProfile />}
        </main>
      </div>
    </>
  );
}

/* ================= Sidebar Item ================= */

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full px-3 py-2 mb-2 rounded transition
      ${
        active
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "text-gray-600 hover:bg-gray-100"
      }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

/* ================= Pages ================= */

const JobFeed = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-semibold mb-4">Job Feed</h2>
    <p>All available jobs will appear here.</p>
  </div>
);

const MyApplications = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-semibold mb-4">My Applications</h2>
    <p>Status: Pending / Accepted / Rejected</p>
  </div>
);

const Notifications = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
    <p>You’ll see selection/rejection updates here.</p>
  </div>
);

const SavedJobs = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-semibold mb-4">Saved Jobs</h2>
    <p>Your bookmarked jobs will appear here.</p>
  </div>
);

const MyProfile = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
    <p>Edit your profile details here.</p>
  </div>
);
